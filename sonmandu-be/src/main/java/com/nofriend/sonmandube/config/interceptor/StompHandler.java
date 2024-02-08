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
        log.info("start StopmHandler");

        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);

//        String rawToken = accessor.getFirstNativeHeader("Authorization");
        String rawToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOSIsImF1dGgiOiJST0xFX1VTRVIiLCJtZW1iZXJJZCI6MjksImV4cCI6MTcwNzk2MjQ3OX0.6TMBRyhHLNEnQK7IhG0YCQ49OI58v8SbJHl0amGvKoHlIQ3qYlrYVYc9Z_dJpqETDWQLs_luE71DedVeBt_xsg";


        log.info("command: " + String.valueOf(accessor.getCommand()));
        if(accessor.getCommand() == StompCommand.CONNECT && rawToken != null) {

            String token = Objects.requireNonNull(rawToken).substring(7);
            log.info(token);
            Authentication authentication = jwtProvider.getAuthentication(token);
            log.info(authentication.toString());
            log.info(authentication.getName());
            Long memberId = Long.valueOf(authentication.getName());
            log.info(String.valueOf(memberId));
            String dbRefreshToken = memberRepository.findById(memberId).orElseThrow()
                    .getRefreshToken();

            log.info(dbRefreshToken);
            log.info(String.valueOf(jwtProvider.validateToken(token) != JwtCode.ACCESS || !token.equals(dbRefreshToken)));
            if (jwtProvider.validateToken(token) != JwtCode.ACCESS || !token.equals(dbRefreshToken)){
                throw new JwtException("Not Valid Token");
            }
        }

        log.info("success StompHandler");
        return message;
    }
}