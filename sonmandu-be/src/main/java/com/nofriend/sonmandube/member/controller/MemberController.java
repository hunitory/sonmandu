package com.nofriend.sonmandube.member.controller;

import com.nofriend.sonmandube.member.application.MemberService;
import com.nofriend.sonmandube.member.controller.request.SigninRequest;
import com.nofriend.sonmandube.member.controller.request.SignupRequest;
import com.nofriend.sonmandube.member.controller.response.TokenResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;

    //--- PostMapping
    @PostMapping("/login")
    public ResponseEntity<TokenResponse> signin(@Valid SigninRequest loginRequest) {
        TokenResponse tokenResponse = memberService.signin(loginRequest);
        return ResponseEntity.ok(tokenResponse);
    }

    //TODO
    @PostMapping("/password")
    public void checkPassword(){}

    //TODO
    @PostMapping("/id")
    public void selectId(){}

    //TODO
    @PostMapping("/refresh")
    public void refreshAccessToken(){}

    //TODO
    @PostMapping("/email-token")
    public void sendEmail(){}

    //TODO
    @PostMapping("/isValidated")
    public void validateEmail(){}

    @PostMapping("/signup")
    public HttpStatus signup(@RequestBody @Valid SignupRequest signupRequest) {
        memberService.signup(signupRequest);
        return HttpStatus.OK;
    }

//-- GetMapping

    //TODO
    @GetMapping("/nickname")
    public void checkNickanme(){}

    //TODO
    @GetMapping("/password")
    public void selectPassword(){

    }

    //TODO
    @GetMapping("/id")
    public void checkId(){

    }

    //TODO
    @GetMapping("/")
    public void selectMember(){

    }

    //-- PutMapping

    //TODO
    @PutMapping("/nickname")
    public void updateNickname(){}

    //TODO
    @PutMapping("/logout")
    public void logout(){

    }

    //TODO
    @PutMapping("/password")
    public void updatePassword(){}

    //TODO
    @PutMapping("/introduction")
    public void updateIntroduction(){}

    //TODO
    @PutMapping("/email")
    public void updateEmail(){}

    //TODO
    @PutMapping("/imageUrl")
    public void updateImageUrl(){}

    //---DeleteMapping

    //TODO
    @DeleteMapping("/")
    public void deleteMember(){

    }

}
