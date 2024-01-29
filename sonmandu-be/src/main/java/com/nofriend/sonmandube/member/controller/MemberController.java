package com.nofriend.sonmandube.member.controller;

import com.nofriend.sonmandube.member.application.MemberService;
import com.nofriend.sonmandube.member.controller.request.LoginRequest;
import com.nofriend.sonmandube.member.controller.response.TokenResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;

    public ResponseEntity<TokenResponse> login(@Valid LoginRequest loginRequest) {
        try {
            TokenResponse tokenResponse = memberService.login();
            return ResponseEntity.ok(tokenResponse);
        } catch(Exception exception){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}
