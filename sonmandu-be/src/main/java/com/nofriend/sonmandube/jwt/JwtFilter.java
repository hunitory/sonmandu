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
import com.nofriend.sonmandube.exception.RefreshTokenExpireException;
import com.nofriend.sonmandube.exception.TokenDenyException;
import com.nofriend.sonmandube.exception.TokenExpireException;
import com.nofriend.sonmandube.member.domain.Member;
>>>>>>> d87b507 (feat: change JwtFilter Exception Handle)
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
<<<<<<< HEAD
=======
import org.springframework.http.HttpHeaders;
>>>>>>> d87b507 (feat: change JwtFilter Exception Handle)
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.lang.model.type.ErrorType;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
    private final JwtProvider jwtProvider;
    private final ObjectMapper objectMapper;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
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
        String accessToken = resolveToken(request, "Authorization");
        String refreshToken = request.getHeader("x-refresh-token");
        boolean hasToken = !accessToken.equals("null");
        boolean hasRefreshToken = !refreshToken.equals("null");





    log.info(String.valueOf(jwtProvider.validateToken(accessToken)));
        if(!hasToken){}
        else if(jwtProvider.validateToken(accessToken) == JwtCode.ACCESS){
<<<<<<< HEAD
>>>>>>> c13f264 (feat: change token exception)
=======

>>>>>>> d87b507 (feat: change JwtFilter Exception Handle)
            Authentication authentication = jwtProvider.getAuthentication(accessToken);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            request.setAttribute("memberId", authentication.getName());

        } else if (jwtProvider.validateToken(accessToken) == JwtCode.EXPIRED){

            if(!hasRefreshToken){
                response.setStatus(HttpStatus.UNAUTHORIZED.value());
                objectMapper.writeValue(response.getWriter(), new Object());
                throw new TokenExpireException("Expired access token");
            }



            if(jwtProvider.validateToken(refreshToken) == JwtCode.ACCESS){
                Authentication authentication = jwtProvider.getAuthentication(refreshToken);
                String memberRefreshToken = jwtProvider.getRefreshToken(Long.valueOf(authentication.getName()));
                if(refreshToken.equals(memberRefreshToken)){
                String newAccessToken = jwtProvider.generateToken(authentication);

                SecurityContextHolder.getContext().setAuthentication(authentication);

                response.setHeader(HttpHeaders.AUTHORIZATION, newAccessToken);

                }else {
                    response.setStatus(HttpStatus.FORBIDDEN.value());
                    objectMapper.writeValue(response.getWriter(), new Object());
                    throw new TokenDenyException("Denied refresh token");
                }

            } else if(jwtProvider.validateToken(refreshToken) == JwtCode.EXPIRED){
                response.setStatus(HttpStatus.GONE.value());
                objectMapper.writeValue(response.getWriter(), new Object());
                throw new RefreshTokenExpireException("Expired refresh token");
            }else if(jwtProvider.validateToken(refreshToken) == JwtCode.DENIED){
                response.setStatus(HttpStatus.FORBIDDEN.value());
                objectMapper.writeValue(response.getWriter(), new Object());
                throw new TokenDenyException("Denied refresh token");
            }
        } else if (jwtProvider.validateToken(accessToken) == JwtCode.DENIED){
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

        String bearerToken = request.getHeader("Authorization");

<<<<<<< HEAD
=======
    private String resolveToken(HttpServletRequest request, String header) {

        String bearerToken = request.getHeader(header);

>>>>>>> d87b507 (feat: change JwtFilter Exception Handle)
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
            return bearerToken.substring(7);
        }

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
    }
}
