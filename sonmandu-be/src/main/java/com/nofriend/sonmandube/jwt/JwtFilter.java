package com.nofriend.sonmandube.jwt;

import com.nofriend.sonmandube.exception.RefreshTokenExpireException;
import com.nofriend.sonmandube.exception.TokenDenyException;
import com.nofriend.sonmandube.exception.TokenExpireException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
    private final JwtProvider jwtProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String accessToken = resolveToken(request, "Authorization");
        String refreshToken = request.getHeader("x-refresh-token");
        boolean hasToken = !accessToken.equals("null");
        boolean hasRefreshToken = !refreshToken.equals("null");

        if(!hasToken){}
        else if(jwtProvider.validateToken(accessToken) == JwtCode.ACCESS){
            Authentication authentication = jwtProvider.getAuthentication(accessToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            request.setAttribute("memberId", authentication.getName());
        } else if (jwtProvider.validateToken(accessToken) == JwtCode.EXPIRED){

            if(!hasRefreshToken){
                throw new TokenExpireException("Expired access token");
            }
            Authentication authentication = jwtProvider.getAuthentication(refreshToken);
            String memberRefreshToken = jwtProvider.getRefreshToken(Long.valueOf(authentication.getName()));

            if(jwtProvider.validateToken(refreshToken) == JwtCode.ACCESS && refreshToken.equals(memberRefreshToken)){
                String newAccessToken = jwtProvider.generateToken(authentication);
                SecurityContextHolder.getContext().setAuthentication(authentication);
                request.setAttribute("memberId", authentication.getName());
                response.setHeader(HttpHeaders.AUTHORIZATION, newAccessToken);
            } else if(jwtProvider.validateToken(refreshToken) == JwtCode.EXPIRED && refreshToken.equals(memberRefreshToken)){
                throw new RefreshTokenExpireException("Expired refresh token");
            }else if(jwtProvider.validateToken(refreshToken) == JwtCode.DENIED && refreshToken.equals(memberRefreshToken)){
                throw new TokenDenyException("Denied refresh token");
            }
        } else if (jwtProvider.validateToken(accessToken) == JwtCode.DENIED){
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
