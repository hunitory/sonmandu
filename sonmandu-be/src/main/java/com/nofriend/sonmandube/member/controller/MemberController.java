package com.nofriend.sonmandube.member.controller;

import com.nofriend.sonmandube.member.application.MemberService;
import com.nofriend.sonmandube.member.controller.request.*;
import com.nofriend.sonmandube.member.controller.response.TokenResponse;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    //--- PostMapping
    @PostMapping("/login")
    public ResponseEntity<TokenResponse> signin(@RequestBody @Valid LoginRequest loginRequest) {
        TokenResponse tokenResponse = memberService.signin(loginRequest);
        return ResponseEntity.ok(tokenResponse);
    }

    @PostMapping("/password")
    public HttpStatus findPassword(@RequestBody @Valid FindPasswordRequest findPasswordRequest){
        memberService.findPassword(findPasswordRequest);
        return HttpStatus.OK;
    }

    @PostMapping("/id")
    public HttpStatus findId(@RequestBody @Valid FindIdRequest findIdRequest){
        memberService.findId(findIdRequest);
        return HttpStatus.OK;
    }

    @PostMapping("/refresh")
    public ResponseEntity<String> refreshAccessToken(){
        String newToken = memberService.refreshAccessToken();
        return ResponseEntity.ok(newToken);
    }

    @PostMapping("/email-token")
    public HttpStatus sendEmailToken(@Email String email){
        memberService.sendEmailToken(email);
        return HttpStatus.OK;
    }

    @PostMapping("/is-validated")
    public HttpStatus validateEmail(@RequestBody @Valid ValidateEmailRequest validateEmailRequest){
        memberService.validateEmail(validateEmailRequest);
        return HttpStatus.OK;
    }

    @PostMapping("/signup")
    public HttpStatus signup(@RequestBody @Valid SignupRequest signupRequest) {
        memberService.signup(signupRequest);
        return HttpStatus.OK;
    }

//-- GetMapping

    @GetMapping("/nickname/{nickname}")
    public ResponseEntity<Boolean> checkUniqueNickname(@NotEmpty @Size(min = 2,max = 12) @PathVariable String nickname){
        boolean isUniqueNickname = memberService.checkUniqueNickname(nickname);
        return ResponseEntity.ok(isUniqueNickname);
    }

    @GetMapping("/password/{password}")
    public ResponseEntity<Boolean> checkValidPassword(@NotEmpty @Size(min = 8, max = 20) String password){
        boolean isValidPassword = memberService.checkUniquepassword(password);
        return ResponseEntity.ok(isValidPassword);
    }

    //TODO
    @GetMapping("/id")
    public ResponseEntity<Boolean> checkUniqueId(@NotEmpty @Size(min = 8, max = 20) String id){
        boolean isUniqueId = memberService.checkUniqueId(id);
        return ResponseEntity.ok(isUniqueId);
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
    @PutMapping("/image-url")
    public void updateImageUrl(){}

    //---DeleteMapping

    //TODO
    @DeleteMapping("/")
    public void deleteMember(){

    }

}
