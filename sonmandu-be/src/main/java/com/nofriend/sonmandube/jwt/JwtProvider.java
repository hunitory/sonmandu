package com.nofriend.sonmandube.jwt;

import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.security.Key;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component
public class JwtProvider {
    @Value("${jwt.secret}")
    private String secret;
    private Key key;
    private final String AUTHORITIES_KEY = "auth";
    private final long accessTokenValidTime = (60 * 1000) * 60;
    private final long refreshTokenValidTime = (60 * 1000) * 60 * 24 * 7;
    private final MemberRepository memberRepository;

    @PostConstruct
    protected  void init(){
        String encodedKey = Base64.getEncoder().encodeToString(secret.getBytes());
        key= Keys.hmacShaKeyFor(encodedKey.getBytes());
    }

    public String generateToken(Authentication authentication, Long accessTokenValidTime){
        String authorities  = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        Date now = new Date();
        Date expiration = new Date(now.getTime() + accessTokenValidTime);

        Member member = memberRepository.findById((long) Integer.parseInt(authentication.getName()))
                .orElseThrow(() -> new RuntimeException("not Found member"));

        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY, authorities)
                .claim("memberId", member.getMemberId())
                .claim("imageUrl", member.getImageUrl())
                .setExpiration(expiration)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

    }

    public String generateToken(Authentication authentication) {
        return generateToken(authentication, accessTokenValidTime);
    }

    public String generateRefreshToken(Authentication authentication) {
        return generateToken(authentication, refreshTokenValidTime);
    }

    public Authentication getAuthentication(String token){
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());
//        System.out.println(authorities.isEmpty());
        User principal = new User(claims.getSubject(), "", authorities);
        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
    }

    public JwtCode validateToken(String token){
        try{
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return JwtCode.ACCESS;
        }catch (ExpiredJwtException e){
            return JwtCode.EXPIRED;
        }catch (Exception e){
            return JwtCode.DENIED;
        }
    }

    @Transactional(readOnly = true)
    public String getRefreshToken(Long MemberId){
        return memberRepository.findById(MemberId)
                .orElseThrow(() -> new IllegalArgumentException("not found refresh token"))
                .getRefreshToken();
    }
}
