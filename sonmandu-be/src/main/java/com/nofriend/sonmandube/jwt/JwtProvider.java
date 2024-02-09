package com.nofriend.sonmandube.jwt;

import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@Slf4j
public class JwtProvider {
    @Value("${jwt.secret}")
    private String secret;
    private Key key;
    private final String AUTHORITIES_KEY = "auth";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    private final long accessTokenValidTime = (60 * 1000) * 60 * 3;
=======
    private final long accessTokenValidTime = (60 * 1000);
>>>>>>> fa401ea (feat: change token time)
=======
    private final long accessTokenValidTime = (30 * 1000);
>>>>>>> c13f264 (feat: change token exception)
=======
    private final long accessTokenValidTime = (20 * 1000);
>>>>>>> 7792f5a (feat: change JwtFilter Exception Message)
    private final long refreshTokenValidTime = (60 * 1000) * 60 * 24 * 7;
    private final MemberRepository memberRepository;

    @PostConstruct
    protected  void init(){
        String encodedKey = Base64.getEncoder().encodeToString(secret.getBytes());
        key= Keys.hmacShaKeyFor(encodedKey.getBytes());
    }

    public String generateToken(Authentication authentication, Long accessTokenValidTime){
//        String authorities  = authentication.getAuthorities().stream()
//                .map(GrantedAuthority::getAuthority)
//                .collect(Collectors.joining(","));

//        Date now = new Date();
//        Date expiration = new Date(now.getTime() + accessTokenValidTime);

        Member member = memberRepository.findById((long) Integer.parseInt(authentication.getName()))
                .orElseThrow(() -> new RuntimeException("not Found member"));

<<<<<<< HEAD
        String iamgeUrl = member.getImageUrl() == null ? "null" : member.getImageUrl();

        return Jwts.builder()
//                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY, authorities)
                .claim("memberId", member.getMemberId())
                .claim("nickName", member.getNickname())
                .claim("imageUrl", iamgeUrl)
                .setExpiration(expiration)
=======
        String imagePrefix = "https://sonmando.s3.ap-northeast-2.amazonaws.com";

        return Jwts.builder()
                .claim("memberId", member.getMemberId())
                .claim("nickName", member.getNickname())
                .claim("imageUrl", member.getImageUrl().substring(imagePrefix.length()))
>>>>>>> 3540f78 (feat: update jwt token informantion)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        System.out.println("getAU");
>>>>>>> e41d808 (feat: change JwtFilter Exception Message)
=======
        System.out.println("getAuthentication");
>>>>>>> 32d7084 (feat: change dateTime)
=======
//        System.out.println("getAuthentication");
>>>>>>> ae05ff2 (feat: update logout security)
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
//        System.out.println("getAuthentication1");

        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());
<<<<<<< HEAD

        User principal = new User(String.valueOf(claims.get("memberId")), "", authorities);

//        log.info("success get authentication");
=======
//        System.out.println(authorities.isEmpty());
        User principal = new User(claims.getSubject(), "", authorities);
<<<<<<< HEAD
>>>>>>> 723abc5 (feat: add spring security chatting)
=======
        log.info("success get authentication");
>>>>>>> ae05ff2 (feat: update logout security)
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
