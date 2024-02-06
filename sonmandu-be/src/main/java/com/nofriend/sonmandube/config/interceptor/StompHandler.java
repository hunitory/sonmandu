package com.nofriend.sonmandube.config.interceptor;

import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import io.jsonwebtoken.JwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Objects;

@RequiredArgsConstructor
@Component
@Slf4j
public class StompHandler implements ChannelInterceptor {
    private final JwtProvider jwtProvider;
    private final MemberRepository memberRepository;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
//        log.info("---------------------------------");
        log.info("start StopmHandler");
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        String rawToken = accessor.getFirstNativeHeader("Authorization");

//        log.info("raw token: " + rawToken);
//        log.info("command: " + String.valueOf(accessor.getCommand()));
//        log.info(String.valueOf(accessor.getCommand() == StompCommand.CONNECT));
//        log.info(String.valueOf(rawToken != null));
        if(accessor.getCommand() == StompCommand.CONNECT && rawToken != null) {
//            log.info("1");
            String token = Objects.requireNonNull(rawToken).substring(7);
//            log.info("2");
//            log.info(token);
            Authentication authentication = jwtProvider.getAuthentication(token);
//            log.info("3");
            Long memberId = Long.valueOf(authentication.getName());
//            log.info("4");
            String dbRefreshToken = memberRepository.findById(memberId).orElseThrow()
                    .getRefreshToken();
//            log.info(String.valueOf(jwtProvider.validateToken(token) != JwtCode.ACCESS));
//            log.info(String.valueOf(!token.equals(dbRefreshToken)));
            if (jwtProvider.validateToken(token) != JwtCode.ACCESS || !token.equals(dbRefreshToken)){
                throw new JwtException("Not Valid Token");
            }
        }

        log.info("success StompHandler");
        return message;
    }
}