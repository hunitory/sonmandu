package com.nofriend.sonmandube.member.controller;

import com.nofriend.sonmandube.member.application.MemberService;
import com.nofriend.sonmandube.member.controller.request.LoginRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import com.nofriend.sonmandube.member.controller.request.*;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
import com.nofriend.sonmandube.member.controller.response.LoginResponse;
import jakarta.mail.MessagingException;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;

    //--- PostMapping

    //회원가입
    @PostMapping("/signup")
    public HttpStatus signup(@RequestBody @Valid SignupRequest signupRequest) throws MessagingException {
        log.info("/members/signup");
        memberService.signup(signupRequest);
        return HttpStatus.NO_CONTENT;
    }

    //이메일 토큰 보내기
    @PostMapping("/email-token")
    public ResponseEntity<Map<String, Long>> sendEmailToken(@Email String email) throws MessagingException {
        log.info("/members/email-token");
        log.info("email : " + email);
        Long emailTokenId = memberService.sendEmailToken(email);
        Map<String, Long> response = new HashMap<>();
        response.put("emailTokenId", emailTokenId);
        return ResponseEntity.ok(response);
    }

    //로그인
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest) {
        log.info("/members/login");
        LoginResponse loginResponse = memberService.login(loginRequest);
        if(loginResponse == null) {
            ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(loginResponse);
    }

    //로그아웃
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/logout")
    public HttpStatus logout(HttpServletRequest request, Authentication authentication){
        log.info("/members/logout");
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));
        memberService.logout(memberId);
        return HttpStatus.OK;
    }

    //회원 정보 수정 시, 비밀번호 일치 확인
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/valid-password")
    public ResponseEntity<Boolean>  checkValidPassword(@Size(min = 8, max = 20) String password, Authentication authentication){
        log.info("/members/valid-password");
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));
        boolean checkValidPasswordResponse = memberService.checkValidPassword(memberId, password);
        return ResponseEntity.ok(checkValidPasswordResponse);
    }


//-- GetMapping

    //회원가입 페이지 - 이메일 토큰 검증하기
    @GetMapping("/email-token")
    public ResponseEntity<Boolean> checkEmailToken(@Valid EmailTokenRequest emailTokenResponse){
        log.info("/members/email-token");
        log.info(emailTokenResponse.toString());
        return ResponseEntity.ok(memberService.checkValidEmailToken(emailTokenResponse));
    }

    
    //회원 정보 수정 - 자기 프로필 조회
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/me")
    public ResponseEntity<MeInformationResponse> findMeInformation(Authentication authentication){
        log.info("/members/me");
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));
        MeInformationResponse meInformationResponse = memberService.findMeInformation(memberId);
        log.info(meInformationResponse.toString());
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
    public ResponseEntity<MemberInformationResponse> findMemberInformation(@RequestParam(required = false) Long memberId, @RequestParam(required = false) String email, @RequestParam(required = false) String name, @RequestParam(required = false) String id) throws MessagingException {
        log.info("/members");
        if(memberId != null && email == null && name == null && id == null){
            MemberInformationResponse memberInformationResponse = memberService.findMemberInformationAll(memberId);
            log.info("find member info");
            return ResponseEntity.ok(memberInformationResponse);
        } else if (email == null || name == null){
            log.info("find failure");
            return ResponseEntity.badRequest().build();
        }

        if(id == null){
            log.info("find id");
            memberService.findMemberInformationId(email, name);
            return ResponseEntity.noContent().build();
        }{
            log.info("find password");
            memberService.findMemberInformationPassword(email, name, id);
            return ResponseEntity.noContent().build();
        }
    }

    // 회원 가입, 회원 수정 페이지 - 아이디나 비밀번호 중복확인
    @GetMapping("/unique")
    public ResponseEntity<HashMap<String, Boolean>> checkUnique(@RequestParam(required = false) String id, @RequestParam(required = false) String nickname){
        log.info("/members/unique");
        if((id == null) == (nickname == null)) {
            return ResponseEntity.badRequest().build();
        }

        Map<String, Boolean> response = new HashMap<>();

        Boolean checkUniqueResponse = false;

        if(nickname == null){
            checkUniqueResponse = memberService.checkUniqueId(id);
        }

        if(id == null){
            checkUniqueResponse = memberService.checkUniqueNickname(nickname);
        }

        Boolean finalCheckUniqueResponse = checkUniqueResponse;
        return ResponseEntity.ok(new HashMap<String, Boolean>() {{
            put("isPossible", finalCheckUniqueResponse);
        }});
    }


//-- PutMapping


//    -- PatchMapping
    
    
    // 회원 수정 페이지 - 프로필 사진 수정
    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/image")
    public HttpStatus updateMemberInformationImage(MultipartFile image, Authentication authentication){
        log.info("/members/image");
        log.info(image.getOriginalFilename());
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));
        memberService.updateMemberInformationImage(memberId, image);
        return HttpStatus.NO_CONTENT;
    }


    // 회원 수정  페이지 - 이메일, 비밀번호, 소개글, 닉네임, 프로필 이미지 수정
    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/{informationType}")
    public HttpStatus updateMemberInformationCommon(@PathVariable @NotEmpty String informationType, @RequestBody String value, Authentication authentication){
        log.info("/members/{informationType}");
        log.info(informationType);
        log.info(value);
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));

        memberService.updateMemberInformationCommon(memberId, informationType, value);
        return HttpStatus.NO_CONTENT;
    }

    //---DeleteMapping

    //회원 수정 페이지 - 회원 탈퇴
    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("")
    public HttpStatus deleteMember(HttpServletRequest httpServletRequest){
        Long memberId = Long.valueOf(String.valueOf(httpServletRequest.getAttribute("memberId")));
        memberService.deleteMember(memberId);
        return HttpStatus.NO_CONTENT;
    }

}
