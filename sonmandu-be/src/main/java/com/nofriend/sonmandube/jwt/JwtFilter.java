package com.nofriend.sonmandube.jwt;

<<<<<<< HEAD
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nofriend.sonmandube.exception.handler.ErrorMessage;
=======
import com.nofriend.sonmandube.exception.RefreshTokenExpireException;
import com.nofriend.sonmandube.exception.TokenDenyException;
import com.nofriend.sonmandube.exception.TokenExpireException;
>>>>>>> e2b9b34 (feat: change token exception)
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
//        log.info("------------------------------");
//        log.info("Request start");
        String accessToken = resolveToken(request);

<<<<<<< HEAD
//        log.info(String.valueOf(accessToken == "null" ? "null" : jwtProvider.validateToken(accessToken)));

        if(accessToken.equals("null")){
            filterChain.doFilter(request, response);
=======
        if(StringUtils.hasText(accessToken) && jwtProvider.validateToken(accessToken) == JwtCode.ACCESS){
            Authentication authentication = jwtProvider.getAuthentication(accessToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            request.setAttribute("memberId", authentication.getName());
        } else if (StringUtils.hasText(accessToken) && jwtProvider.validateToken(accessToken) == JwtCode.EXPIRED){
            String refreshToken1 = request.getHeader("x-refresh-token");
            if(!StringUtils.hasText(refreshToken1)){
                throw new TokenExpireException("Expired access token");
            }
            Authentication authentication = jwtProvider.getAuthentication(refreshToken1);
            String refreshToken2 = jwtProvider.getRefreshToken(Long.valueOf(authentication.getName()));

            if(jwtProvider.validateToken(refreshToken1) == JwtCode.ACCESS && refreshToken1.equals(refreshToken2)){
                String newAccessToken = jwtProvider.generateToken(authentication);
                SecurityContextHolder.getContext().setAuthentication(authentication);
                request.setAttribute("memberId", authentication.getName());
                response.setHeader(HttpHeaders.AUTHORIZATION, newAccessToken);
            } else if(jwtProvider.validateToken(refreshToken1) == JwtCode.EXPIRED && refreshToken1.equals(refreshToken2)){
                throw new RefreshTokenExpireException("Expired refresh token");
            }else if(jwtProvider.validateToken(refreshToken1) == JwtCode.DENIED && refreshToken1.equals(refreshToken2)){
                throw new TokenDenyException("Denied refresh token");
            }
        } else if (StringUtils.hasText(accessToken) && jwtProvider.validateToken(accessToken) == JwtCode.DENIED){
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

        String bearerToken = request.getHeader("Authorization");

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
                            default -> "JwtTokenFilter Error";
                        }
                )
        );
    }
}
