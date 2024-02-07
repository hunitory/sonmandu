package com.nofriend.sonmandube.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nofriend.sonmandube.exception.RefreshTokenExpireException;
import com.nofriend.sonmandube.exception.TokenDenyException;
import com.nofriend.sonmandube.exception.TokenExpireException;
import com.nofriend.sonmandube.member.domain.Member;
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
        String accessToken = resolveToken(request, "Authorization");
        String refreshToken = request.getHeader("x-refresh-token");
        boolean hasToken = !accessToken.equals("null");
        boolean hasRefreshToken = !refreshToken.equals("null");





    log.info(String.valueOf(jwtProvider.validateToken(accessToken)));
        if(!hasToken){}
        else if(jwtProvider.validateToken(accessToken) == JwtCode.ACCESS){

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
        }


        filterChain.doFilter(request, response);
    }


    private String resolveToken(HttpServletRequest request, String header) {

        String bearerToken = request.getHeader(header);

        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
            return bearerToken.substring(7);
        }

        return "null";
    }
}
