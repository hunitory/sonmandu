package com.nofriend.sonmandube.config.interceptor;

import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
<<<<<<< HEAD
import com.nofriend.sonmandube.member.repository.MemberRepository;
import io.jsonwebtoken.JwtException;
=======
>>>>>>> 1c9b337f (feat: add WebSocket)
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
<<<<<<< HEAD
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
=======
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Component;
>>>>>>> 1c9b337f (feat: add WebSocket)

@RequiredArgsConstructor
@Component
@Slf4j
public class StompHandler implements ChannelInterceptor {
    private final JwtProvider jwtProvider;
<<<<<<< HEAD
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

=======

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        log.info("StopmHandler!");
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        log.info(accessor.toString());
        log.info(channel.toString());
        log.info(message.toString());
        String token = accessor.getFirstNativeHeader("Authorization");
        if (token != null){
            token.substring(7);
        }
        log.info(token);
//        if (token != null){
//            token.substring(7);
//        }
        System.out.println(token);
        if(accessor.getCommand() == StompCommand.CONNECT) {
            log.info("YE--------------------------");
            if (jwtProvider.validateToken(accessor.getFirstNativeHeader("Authorization")) == JwtCode.ACCESS) {
                System.out.println(1);
            }
            if (jwtProvider.validateToken(accessor.getFirstNativeHeader("Authorization")) == JwtCode.EXPIRED) {
                System.out.println(2);
            }
            if (jwtProvider.validateToken(accessor.getFirstNativeHeader("Authorization")) == JwtCode.DENIED) {
                System.out.println(3);
            }
//                throw new AccessDeniedException("");
        }
        return message;
>>>>>>> 1c9b337f (feat: add WebSocket)
    }
}