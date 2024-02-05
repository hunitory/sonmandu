package com.nofriend.sonmandube.config.interceptor;

import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

import java.util.Objects;

@RequiredArgsConstructor
@Component
@Slf4j
public class StompHandler implements ChannelInterceptor {
    private final JwtProvider jwtProvider;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
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
    }
}