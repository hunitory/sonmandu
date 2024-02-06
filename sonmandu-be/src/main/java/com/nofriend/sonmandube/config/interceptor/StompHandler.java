package com.nofriend.sonmandube.config.interceptor;

import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import io.jsonwebtoken.JwtException;
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
=======
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
<<<<<<< HEAD
import org.springframework.security.access.AccessDeniedException;
=======
import org.springframework.security.core.Authentication;
>>>>>>> 23a865a4 (cfeat: add spring security chatting)
import org.springframework.stereotype.Component;
>>>>>>> bb671ba (feat: add WebSocket)

@RequiredArgsConstructor
@Component
@Slf4j
public class StompHandler implements ChannelInterceptor {
    private final JwtProvider jwtProvider;
    private final MemberRepository memberRepository;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> 23a865a4 (cfeat: add spring security chatting)
        }

        log.info("success StompHandler");
        return message;
>>>>>>> bb671ba (feat: add WebSocket)
    }
}