package com.nofriend.sonmandube.config.interceptor;

<<<<<<< HEAD
import com.nofriend.sonmandube.exception.ExpireTokenException;
import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import io.jsonwebtoken.JwtException;
<<<<<<< HEAD
=======
import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
>>>>>>> bb48a11 (feat: add WebSocket)
=======
>>>>>>> 723abc5 (feat: add spring security chatting)
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
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
<<<<<<< HEAD
>>>>>>> bb48a11 (feat: add WebSocket)
=======
import org.springframework.util.StringUtils;
>>>>>>> 5ff7c3c (refactor: chatting websocket)

import java.util.Objects;

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
=======
//        log.info("---------------------------------");
        log.info("start StopmHandler");
>>>>>>> 723abc5 (feat: add spring security chatting)
=======
        log.info("start StopmHandler");

>>>>>>> a88b847 (teat: wss)
        StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);

<<<<<<< HEAD
        String rawToken = accessor.getFirstNativeHeader("Authorization");
<<<<<<< HEAD
=======
=======
>>>>>>> 5f2246a (feat: update jwt information)
//        String rawToken = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOSIsImF1dGgiOiJST0xFX1VTRVIiLCJtZW1iZXJJZCI6MjksImV4cCI6MTcwNzk2MjQ3OX0.6TMBRyhHLNEnQK7IhG0YCQ49OI58v8SbJHl0amGvKoHlIQ3qYlrYVYc9Z_dJpqETDWQLs_luE71DedVeBt_xsg";
>>>>>>> 32d7084 (feat: change dateTime)

<<<<<<< HEAD
//        log.info("command: " + String.valueOf(accessor.getCommand()));
//        if(accessor.getCommand() == StompCommand.CONNECT && rawToken != null) {
//
//            String token = Objects.requireNonNull(rawToken).substring(7);
//            log.info(token);
//            Authentication authentication = jwtProvider.getAuthentication(token);
//            log.info(authentication.toString());
//            log.info(authentication.getName());
//            Long memberId = Long.valueOf(authentication.getName());
//            log.info(String.valueOf(memberId));
//            String dbRefreshToken = memberRepository.findById(memberId).orElseThrow()
//                    .getRefreshToken();
//
//            log.info(dbRefreshToken);
//            log.info(String.valueOf(jwtProvider.validateToken(token) != JwtCode.ACCESS || !token.equals(dbRefreshToken)));
//            if (jwtProvider.validateToken(token) != JwtCode.ACCESS || !token.equals(dbRefreshToken)){
//                throw new JwtException("Not Valid Token");
//            }
//        }
=======
        String rawToken = accessor.getFirstNativeHeader("Authorization");

        String token = StringUtils.hasText(rawToken) && rawToken.startsWith("Bearer ")
                ? Objects.requireNonNull(rawToken).substring(7)
                : null;

        log.info("command: " + String.valueOf(accessor.getCommand()));
        if(accessor.getCommand() == StompCommand.CONNECT && token != null) {
            log.info(token);
            Authentication authentication = jwtProvider.getAuthentication(token);
            log.info(authentication.toString());
            log.info(authentication.getName());

            accessor.setUser(jwtProvider.getAuthentication(token));
        }
>>>>>>> 5f2246a (feat: update jwt information)

        log.info("success StompHandler");
        return message;
>>>>>>> bb48a11 (feat: add WebSocket)
    }
}