package com.nofriend.sonmandube.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nofriend.sonmandube.exception.handler.ErrorMessage;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
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
        log.info("------------------------------");
        log.info("Request start");
        String accessToken = resolveToken(request, "Authorization");
        String refreshToken = request.getHeader("x-refresh-token");

        if(refreshToken == null){
            refreshToken = "null";
        }
//        log.info("token: " + accessToken);
//        log.info("refresh token: " + refreshToken);

        boolean hasToken = !accessToken.equals("null");
        boolean hasRefreshToken = !refreshToken.equals("null");

        if(!hasToken){
            filterChain.doFilter(request, response);
        }
        else if(jwtProvider.validateToken(accessToken) == JwtCode.ACCESS){

            Authentication authentication = jwtProvider.getAuthentication(accessToken);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            filterChain.doFilter(request, response);

        } else if (jwtProvider.validateToken(accessToken) == JwtCode.EXPIRED){

            if(!hasRefreshToken){
                handleJwtException(HttpStatus.UNAUTHORIZED, response);
            }

            if(jwtProvider.validateToken(refreshToken) == JwtCode.ACCESS){
                Authentication authentication = jwtProvider.getAuthentication(refreshToken);
                String memberRefreshToken = jwtProvider.getRefreshToken(Long.valueOf(authentication.getName()));
                if(refreshToken.equals(memberRefreshToken)){
                    String newAccessToken = jwtProvider.generateToken(authentication);

                    SecurityContextHolder.getContext().setAuthentication(authentication);

                    response.setHeader(HttpHeaders.AUTHORIZATION, newAccessToken);

                    filterChain.doFilter(request, response);
                }else {
                    handleJwtException(HttpStatus.FORBIDDEN, response);
                }

            } else if(jwtProvider.validateToken(refreshToken) == JwtCode.EXPIRED){
                handleJwtException(HttpStatus.GONE, response);
            }else if(jwtProvider.validateToken(refreshToken) == JwtCode.DENIED){
                handleJwtException(HttpStatus.FORBIDDEN, response);
            }
        } else if (jwtProvider.validateToken(accessToken) == JwtCode.DENIED){
            handleJwtException(HttpStatus.FORBIDDEN, response);
        }
    }

    private String resolveToken(HttpServletRequest request, String header) {

        String bearerToken = request.getHeader(header);

        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
            return bearerToken.substring(7);
        }

        return "null";
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
                            case GONE -> "Expired refresh token";
                            default -> "JwtTokenFilter Error";
                        }
                )
        );
    }
}
