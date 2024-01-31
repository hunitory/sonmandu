package com.nofriend.sonmandube.member.application;

import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.controller.request.LoginRequest;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberServiceImplTest {

    @Autowired
    AuthenticationManagerBuilder authenticationManagerBuilder;

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    MemberRepository memberRepository;
    @Test
    @DisplayName("test login and generate token")
    public void generateToken(){
        Member member = Member.builder()
                .id("qweqweqwe")
                .password("123123123")
                .build();

        memberRepository.save(member);

        System.out.println(member);

        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setId("qweqweqwe");
        loginRequest.setPassword("123123123");

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(loginRequest.getId(), loginRequest.getPassword());
        Authentication authentication =  authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

        String token = jwtProvider.generateToken(authentication);
        String refreshToken = jwtProvider.generateRefreshToken(authentication);
//        Member member = (Member) authentication.getPrincipal();

        System.out.println("token" + token);
//        refreshTokenService.saveOrUpdate(member, refreshToken);
    }


}