package com.nofriend.sonmandube.config.interceptor;

<<<<<<< HEAD
import com.nofriend.sonmandube.exception.ExpireTokenException;
import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import io.jsonwebtoken.JwtException;
=======
import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
>>>>>>> bb48a11 (feat: add WebSocket)
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
<<<<<<< HEAD
import org.springframework.messaging.MessageDeliveryException;
import org.springframework.messaging.MessagingException;
import org.springframework.messaging.simp.stomp.StompCommand;
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
import org.springframework.stereotype.Component;
>>>>>>> bb48a11 (feat: add WebSocket)

import java.util.Objects;

@RequiredArgsConstructor
@Component
@Slf4j
public class StompHandler implements ChannelInterceptor {
    private final JwtProvider jwtProvider;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
<<<<<<< HEAD
//        log.info("================================");
//        log.info("start StompHandler");

        StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);

//        log.info(String.valueOf(accessor.getCommand()));

        String rawToken = Objects.requireNonNull(accessor).getFirstNativeHeader("Authorization");

        String token = StringUtils.hasText(rawToken) && rawToken.startsWith("Bearer ")
                ? Objects.requireNonNull(rawToken).substring(7)
                : "null";

        if(accessor.getCommand() == CONNECT && !token.equals("null") && jwtProvider.validateToken(token) == JwtCode.ACCESS) {
            Authentication authentication = jwtProvider.getAuthentication(token);

            accessor.setUser(authentication);
            return message;
        }else if(accessor.getUser() != null){
//            log.info(String.valueOf(accessor.getUser()));
//            log.info("success StompHandler");
            return message;
        }else{
//            log.info("failure stomp");
            throw new MessageDeliveryException("토큰을 확인하십시오.");
        }

=======
        log.info("StopmHandler!");
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);
        log.info(accessor.toString());
        log.info(channel.toString());
        log.info(message.toString());
        String token = Objects.requireNonNull(accessor.getFirstNativeHeader("Authorization")).substring(7);
//        if (token != null){
//            try{
//                token.substring(7);
//
//            }catch (Exception ignored){
//
//            }
//        }
//        System.out.println(Objects.requireNonNull(accessor.getFirstNativeHeader("Authorization")).substring(7));
        log.info(token);
//        if (token != null){
//            token.substring(7);
//        }
        System.out.println(token);
        if(accessor.getCommand() == StompCommand.CONNECT) {
            log.info("YE--------------------------");
            log.info(jwtProvider.validateToken(token).toString());
            if (jwtProvider.validateToken(token) == JwtCode.ACCESS) {
                System.out.println(1);
            }
            if (jwtProvider.validateToken(token) == JwtCode.EXPIRED) {
                System.out.println(2);
            }
            if (jwtProvider.validateToken(token) == JwtCode.DENIED) {
                System.out.println(3);
            }
//                throw new AccessDeniedException("");
        }
        return message;
>>>>>>> bb48a11 (feat: add WebSocket)
    }
}