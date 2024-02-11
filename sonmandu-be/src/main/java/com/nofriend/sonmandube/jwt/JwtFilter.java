package com.nofriend.sonmandube.jwt;

<<<<<<< HEAD
<<<<<<< HEAD
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nofriend.sonmandube.exception.handler.ErrorMessage;
=======
import com.nofriend.sonmandube.exception.RefreshTokenExpireException;
import com.nofriend.sonmandube.exception.TokenDenyException;
import com.nofriend.sonmandube.exception.TokenExpireException;
>>>>>>> e2b9b34 (feat: change token exception)
=======
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nofriend.sonmandube.exception.handler.ErrorMessage;
<<<<<<< HEAD
import com.nofriend.sonmandube.member.domain.Member;
>>>>>>> d87b507 (feat: change JwtFilter Exception Handle)
=======
>>>>>>> e9e2247 (feat: change JwtFilter Exception Message)
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
<<<<<<< HEAD
<<<<<<< HEAD
=======
import org.springframework.http.HttpHeaders;
>>>>>>> d87b507 (feat: change JwtFilter Exception Handle)
=======
>>>>>>> 71d2f9b (feat: renew refresh token)
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
    private final JwtProvider jwtProvider;
    private final ObjectMapper objectMapper;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//        log.info("------------------------------");
//        log.info("Request start");
        String accessToken = resolveToken(request);

<<<<<<< HEAD
//        log.info(String.valueOf(accessToken == "null" ? "null" : jwtProvider.validateToken(accessToken)));

        if(accessToken.equals("null")){
            filterChain.doFilter(request, response);
=======
        if(StringUtils.hasText(accessToken) && jwtProvider.validateToken(accessToken) == JwtCode.ACCESS){
=======
=======
        log.info("jwt filter start");
>>>>>>> e41d808 (feat: change JwtFilter Exception Message)
=======
        log.info("------------------------------");
        log.info("Request start");
<<<<<<< HEAD
>>>>>>> c31b9a8 (feat: change dateTime)
        String accessToken = resolveToken(request, "Authorization");
        String refreshToken = request.getHeader("x-refresh-token");
=======
        String accessToken = resolveToken(request);
>>>>>>> 71d2f9b (feat: renew refresh token)

        if(accessToken.equals("null")){
            filterChain.doFilter(request, response);
        }
        else if(jwtProvider.validateToken(accessToken) == JwtCode.ACCESS){
<<<<<<< HEAD
>>>>>>> c13f264 (feat: change token exception)
=======

>>>>>>> d87b507 (feat: change JwtFilter Exception Handle)
            Authentication authentication = jwtProvider.getAuthentication(accessToken);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            filterChain.doFilter(request, response);

        } else if (jwtProvider.validateToken(accessToken) == JwtCode.EXPIRED){
            handleJwtException(HttpStatus.UNAUTHORIZED, response);
        } else if (jwtProvider.validateToken(accessToken) == JwtCode.DENIED){
<<<<<<< HEAD
            response.setStatus(HttpStatus.FORBIDDEN.value());
            objectMapper.writeValue(response.getWriter(), new Object());
            throw new TokenDenyException("Denied access token");
>>>>>>> e2b9b34 (feat: change token exception)
        }
        else if(jwtProvider.validateToken(accessToken) == JwtCode.ACCESS){

            Authentication authentication = jwtProvider.getAuthentication(accessToken);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            filterChain.doFilter(request, response);

        } else if (jwtProvider.validateToken(accessToken) == JwtCode.EXPIRED){
            handleJwtException(HttpStatus.UNAUTHORIZED, response);
        } else if (jwtProvider.validateToken(accessToken) == JwtCode.DENIED){
            handleJwtException(HttpStatus.FORBIDDEN, response);
        }
    }

    private String resolveToken(HttpServletRequest request) {
<<<<<<< HEAD

        String bearerToken = request.getHeader("Authorization");

<<<<<<< HEAD
=======
=======
            handleJwtException(HttpStatus.FORBIDDEN, response);
        }
    }

>>>>>>> 7792f5a (feat: change JwtFilter Exception Message)
    private String resolveToken(HttpServletRequest request, String header) {
=======
>>>>>>> 71d2f9b (feat: renew refresh token)

        String bearerToken = request.getHeader("Authorization");

>>>>>>> d87b507 (feat: change JwtFilter Exception Handle)
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
            return bearerToken.substring(7);
        }

<<<<<<< HEAD
<<<<<<< HEAD
        return "null";
<<<<<<< HEAD
    }

    private void handleJwtException(HttpStatus httpStatus, HttpServletResponse response) throws IOException {

        response.setStatus(httpStatus.value());

        objectMapper.writeValue(
                response.getWriter(),
                new ErrorMessage(
                        httpStatus.value(),
                        httpStatus.name(),
                        switch (httpStatus){
                            case UNAUTHORIZED -> "Expired token";
                            case FORBIDDEN -> "Denied token";
                            default -> "JwtTokenFilter Error";
                        }
                )
        );
=======
>>>>>>> c13f264 (feat: change token exception)
=======
        return null;
>>>>>>> 71d2f9b (feat: renew refresh token)
=======
        return "null";
>>>>>>> 603f9c6 (test: jwt filter)
    }

    private void handleJwtException(HttpStatus httpStatus, HttpServletResponse response) throws IOException {

        response.setStatus(httpStatus.value());

        objectMapper.writeValue(
                response.getWriter(),
                new ErrorMessage(
                        httpStatus.value(),
                        httpStatus.name(),
                        switch (httpStatus){
                            case UNAUTHORIZED -> "Expired token";
                            case FORBIDDEN -> "Denied token";
                            default -> "JwtTokenFilter Error";
                        }
                )
        );
    }
}
