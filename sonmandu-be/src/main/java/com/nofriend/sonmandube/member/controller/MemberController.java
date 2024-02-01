package com.nofriend.sonmandube.member.controller;

import com.nofriend.sonmandube.member.application.MemberService;
import com.nofriend.sonmandube.member.controller.request.LoginRequest;
import jakarta.validation.Valid;
import com.nofriend.sonmandube.member.controller.request.*;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
import com.nofriend.sonmandube.member.controller.response.LoginResponse;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;
    @Value("${server.url}")
    private String serverUrl;

    //--- PostMapping

    //회원가입
    @PostMapping("/signup")
    public HttpStatus signup(@RequestBody @Valid SignupRequest signupRequest) throws MessagingException {
        memberService.signup(signupRequest);
        return HttpStatus.OK;
    }

    //로그인
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest) {
        LoginResponse loginResponse = memberService.login(loginRequest);
        if(loginResponse == null) {
            ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(loginResponse);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("logout")
    public HttpStatus logout(){
        //TODO memberId in token
        Long memberId = -1L;
        memberService.logout(memberId);
        return HttpStatus.OK;
    }

    //비밀번호 일치 확인
    @PostMapping("/valid-password")
    public ResponseEntity<Boolean>  checkValidPassword(@Size(min = 8, max = 20) String password){
        boolean checkValidPasswordResponse = memberService.checkValidPassword(password);
        return ResponseEntity.ok(checkValidPasswordResponse);
    }


//-- GetMapping

    @GetMapping("/me")
    public ResponseEntity<MeInformationResponse> findMeInformation(){
        //TODO memberId in token
        Long memberId = -1L;
        MeInformationResponse meInformationResponse = memberService.findMeInformation(memberId);
        return ResponseEntity.ok(meInformationResponse);
    }

    /**
     * 회원 정보 찾기
     * memberId만 있을 시 전체 정보 리턴
     * email, name만 있을 시 아이디를 찾아서 이메일로 보내주기
     * email, name, id만 있을 시 비밀번호를 찾아서 이메일로 보내주기
//     * @param  조건에 따라서 nullable한 변수들 존재
     * @return 전체 정보 조회시 MemberInformantionResponse에 해당하는 정보 리런
     * 아닐 시 리턴되는 정보 없음
     */
    @GetMapping("")
    public ResponseEntity<MemberInformationResponse> findMemberInformation(@RequestParam(required = false) Long memberId, @RequestParam(required = false) String email, @RequestParam(required = false) String name, @RequestParam(required = false) String id){
        if(memberId != null && email == null && name == null && id == null){
            MemberInformationResponse memberInformationResponse = memberService.findMemberInformationAll(memberId);
            return ResponseEntity.ok(memberInformationResponse);
        } else if (email == null || name == null){
            return ResponseEntity.badRequest().build();
        }

        if(id == null){
            memberService.findMemberInformationId(email, name);
            return ResponseEntity.ok().build();
        }{
            memberService.findMemberInformationPassword(email, name, id);
            return ResponseEntity.ok().build();
        }
    }

    @GetMapping("/unique")
    public ResponseEntity<Boolean> checkUnique(@RequestParam(required = false) String id, @RequestParam(required = false) String nickname){
        if((id == null) == (nickname == null)) {
            return ResponseEntity.badRequest().build();
        }

        Boolean checkUniqueResponse = false;

        if(nickname == null){
            checkUniqueResponse = memberService.checkUniqueId(id);
        }

        if(id == null){
            checkUniqueResponse = memberService.checkUniqueNickname(nickname);
        }

        return ResponseEntity.ok(checkUniqueResponse);
    }

    //-- PutMapping

    @GetMapping("/email-validation")
    public HttpStatus updateIsValidated(EmailValidationRequest emailValidationRequest, HttpServletResponse httpServletResponse) throws IOException {
        HttpStatus response = memberService.updateIsValidated(emailValidationRequest);

        if(response.is3xxRedirection()){
            httpServletResponse.sendRedirect(serverUrl);
        }

        return response;
    }

    //-- PatchMapping
    @PatchMapping("/{informationType}")
    public HttpStatus updateMemberInformation(@PathVariable @NotEmpty String informationType, @RequestParam @NotEmpty String value){
        //TODO change memberId in token
        Long memberId = -1L;

        memberService.updateMemberInformation(memberId, informationType, value);
        return HttpStatus.OK;
    }

    //---DeleteMapping

    //TODO
    @DeleteMapping("/")
    public HttpStatus deleteMember(){
        //TODO change memberId in token
        Long memberId = -1L;
        memberService.deleteMember(memberId);
        return HttpStatus.OK;
    }

}
