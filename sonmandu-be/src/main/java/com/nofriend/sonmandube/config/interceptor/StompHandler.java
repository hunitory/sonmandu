package com.nofriend.sonmandube.config.interceptor;

import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import io.jsonwebtoken.JwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageDeliveryException;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Objects;

import static org.springframework.messaging.simp.stomp.StompCommand.CONNECT;
import org.springframework.security.access.AccessDeniedException;

@RequiredArgsConstructor
@Component
@Slf4j
public class StompHandler implements ChannelInterceptor {
    private final JwtProvider jwtProvider;
    private final MemberRepository memberRepository;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);

        String rawToken = Objects.requireNonNull(accessor).getFirstNativeHeader("Authorization");

        String token = StringUtils.hasText(rawToken) && rawToken.startsWith("Bearer ")
                ? Objects.requireNonNull(rawToken).substring(7)
                : "null";

        if(accessor.getCommand() == CONNECT && !token.equals("null") && jwtProvider.validateToken(token) == JwtCode.ACCESS) {
            Authentication authentication = jwtProvider.getAuthentication(token);
            accessor.setUser(authentication);
            return message;
        }else if(accessor.getUser() != null){
            return message;
        }else{
            throw new MessageDeliveryException("토큰을 확인하십시오.");
        }

    }
}