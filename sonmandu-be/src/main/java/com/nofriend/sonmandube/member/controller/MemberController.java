package com.nofriend.sonmandube.member.controller;

import com.nofriend.sonmandube.member.application.MemberService;
import com.nofriend.sonmandube.member.controller.request.LoginRequest;
import com.nofriend.sonmandube.member.controller.response.LoginResponse;
<<<<<<< HEAD
=======
import jakarta.servlet.http.HttpServletRequest;
>>>>>>> 71d2f9b (feat: renew refresh token)
import jakarta.validation.Valid;
import com.nofriend.sonmandube.member.controller.request.*;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
import jakarta.mail.MessagingException;
<<<<<<< HEAD
<<<<<<< HEAD
=======
import jakarta.servlet.http.HttpServletResponse;
=======
>>>>>>> 7b5a9b2 (feat: change dateTime)
import jakarta.validation.constraints.Email;
>>>>>>> e9e2247 (feat: change JwtFilter Exception Message)
import jakarta.validation.constraints.NotEmpty;
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    @Value("${client.url}")
    private String clientUrl;
>>>>>>> 32bc78e (feat: findByMemeberInformation, show tropy info)
=======
>>>>>>> c31b9a8 (feat: change dateTime)

    //--- PostMapping

    @PostMapping("/token")
    public ResponseEntity<Map<String, String>> updateToken(@RequestBody Map<String, String> request){
        String newToken = memberService.updateToken(request.get("refreshToken"));

        return ResponseEntity.ok(new HashMap<>(){{
            put("token", newToken);
        }});
    }

    //회원가입
    @PostMapping("/signup")
<<<<<<< HEAD
    public ResponseEntity<HttpStatus> signup(@RequestBody @Valid SignupRequest signupRequest) throws MessagingException {
=======
    public HttpStatus signup(@RequestBody @Valid SignupRequest signupRequest) throws MessagingException {
>>>>>>> c31b9a8 (feat: change dateTime)
        log.info("/members/signup");
        memberService.signup(signupRequest);
<<<<<<< HEAD
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    //이메일 토큰 보내기
    @PostMapping("/email-token")
    public ResponseEntity<Map<String, Long>> sendEmailToken(@RequestBody Map<String, String> request) throws MessagingException {
        log.info("/members/email-token");
        String email = request.get("email");
        log.info("email : " + email);

        Long emailTokenId = memberService.sendEmailToken(email);
        Map<String, Long> response = new HashMap<>();
        response.put("emailTokenId", emailTokenId);
        return ResponseEntity.ok(response);
=======
        return HttpStatus.NO_CONTENT;
>>>>>>> 7ba0a74 (feat: member, handwriting, handwritingstory api)
    }

    //이메일 토큰 보내기
    @PostMapping("/email-token")
    public ResponseEntity<Map<String, Long>> sendEmailToken(@RequestBody Map<String, String> request) throws MessagingException {
        log.info("/members/email-token");
        String email = request.get("email");
        log.info("email : " + email);

        Long emailTokenId = memberService.sendEmailToken(email);
        Map<String, Long> response = new HashMap<>();
        response.put("emailTokenId", emailTokenId);
        return ResponseEntity.ok(response);
    }

    //로그인
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginRequest) {
<<<<<<< HEAD
<<<<<<< HEAD
        log.info("/members/login");
=======
        log.info("/login");
>>>>>>> e41d808 (feat: change JwtFilter Exception Message)
=======
        log.info("/members/login");
>>>>>>> c31b9a8 (feat: change dateTime)
        LoginResponse loginResponse = memberService.login(loginRequest);
        if(loginResponse == null) {
            ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(loginResponse);
    }

    //로그아웃
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/logout")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 339b19b (fix: bugs)
    public ResponseEntity<HttpStatus> logout(Authentication authentication){
        log.info("/members/logout");
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));
=======
    public HttpStatus logout(HttpServletRequest request){
        log.info("/members/logout");
        Long memberId = Long.valueOf(String.valueOf(request.getAttribute("memberId")));
>>>>>>> c31b9a8 (feat: change dateTime)
=======
    public HttpStatus logout(HttpServletRequest request, Authentication authentication){
=======
    public HttpStatus logout(Authentication authentication){
>>>>>>> 71d2f9b (feat: renew refresh token)
        log.info("/members/logout");
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));
>>>>>>> ae05ff2 (feat: update logout security)
        memberService.logout(memberId);
<<<<<<< HEAD
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
=======
        return ResponseEntity.noContent().build();
>>>>>>> 339b19b (fix: bugs)
    }

    //회원 정보 수정 시, 비밀번호 일치 확인
    @PreAuthorize("hasRole('USER')")
    @PostMapping("/valid-password")
<<<<<<< HEAD
<<<<<<< HEAD
    public ResponseEntity<Boolean>  checkValidPassword(@RequestBody Map<String, String> request, Authentication authentication){
        log.info("/members/valid-password");
        String password = request.get("password");

=======
    public ResponseEntity<Boolean>  checkValidPassword(@Size(min = 8, max = 20) String password, Authentication authentication){
        log.info("/members/valid-password");
>>>>>>> c31b9a8 (feat: change dateTime)
=======
    public ResponseEntity<Boolean>  checkValidPassword(@RequestBody Map<String, String> request, Authentication authentication){
        log.info("/members/valid-password");
        String password = request.get("password");

>>>>>>> 71d2f9b (feat: renew refresh token)
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));
        boolean checkValidPasswordResponse = memberService.checkValidPassword(memberId, password);

        return ResponseEntity.ok(checkValidPasswordResponse);
    }


//-- GetMapping

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c31b9a8 (feat: change dateTime)
    //회원가입 페이지 - 이메일 토큰 검증하기
    @GetMapping("/email-token")
    public ResponseEntity<Boolean> checkEmailToken(@Valid EmailTokenRequest emailTokenResponse){
        log.info("/members/email-token");
<<<<<<< HEAD
=======
    @GetMapping("/email-token")
<<<<<<< HEAD
    public ResponseEntity<Boolean> checkEmailToken(@RequestBody @Valid EmailTokenRequest emailTokenResponse){
>>>>>>> 7ba0a74 (feat: member, handwriting, handwritingstory api)
=======
    public ResponseEntity<Boolean> checkEmailToken(@Valid EmailTokenRequest emailTokenResponse){
>>>>>>> 7b5a9b2 (feat: change dateTime)
=======
>>>>>>> c31b9a8 (feat: change dateTime)
        log.info(emailTokenResponse.toString());
        return ResponseEntity.ok(memberService.checkValidEmailToken(emailTokenResponse));
    }

<<<<<<< HEAD
<<<<<<< HEAD
    
    //회원 정보 수정 - 자기 프로필 조회
=======
>>>>>>> 7ba0a74 (feat: member, handwriting, handwritingstory api)
=======
    
    //회원 정보 수정 - 자기 프로필 조회
>>>>>>> c31b9a8 (feat: change dateTime)
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
<<<<<<< HEAD
    public ResponseEntity<Object> findMemberInformation(@RequestParam(required = false) Long memberId, @RequestParam(required = false) String email, @RequestParam(required = false) String name, @RequestParam(required = false) String id) throws MessagingException {
=======
    public ResponseEntity<MemberInformationResponse> findMemberInformation(@RequestParam(required = false) Long memberId, @RequestParam(required = false) String email, @RequestParam(required = false) String name, @RequestParam(required = false) String id) throws MessagingException {
>>>>>>> c31b9a8 (feat: change dateTime)
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
<<<<<<< HEAD
<<<<<<< HEAD
    public ResponseEntity<Map<String, Boolean>> checkUnique(@RequestParam(required = false) String id, @RequestParam(required = false) String nickname){
=======
    public ResponseEntity<HashMap<String, Boolean>> checkUnique(@RequestParam(required = false) String id, @RequestParam(required = false) String nickname){
>>>>>>> c31b9a8 (feat: change dateTime)
=======
    public ResponseEntity<Map<String, Boolean>> checkUnique(@RequestParam(required = false) String id, @RequestParam(required = false) String nickname){
>>>>>>> 71d2f9b (feat: renew refresh token)
        log.info("/members/unique");
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

        Boolean finalCheckUniqueResponse = checkUniqueResponse;
<<<<<<< HEAD
<<<<<<< HEAD
        return ResponseEntity.ok(new HashMap<>() {{
=======
        return ResponseEntity.ok(new HashMap<String, Boolean>() {{
>>>>>>> c31b9a8 (feat: change dateTime)
=======
        return ResponseEntity.ok(new HashMap<>() {{
>>>>>>> 71d2f9b (feat: renew refresh token)
            put("isPossible", finalCheckUniqueResponse);
        }});
    }


//-- PutMapping


//    -- PatchMapping
    
    
    // 회원 수정 페이지 - 프로필 사진 수정
    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/image")
<<<<<<< HEAD
    public ResponseEntity<Void> updateMemberInformationImage(MultipartFile image, Authentication authentication){
=======
    public HttpStatus updateMemberInformationImage(MultipartFile image, Authentication authentication){
>>>>>>> c31b9a8 (feat: change dateTime)
        log.info("/members/image");
        log.info(image.getOriginalFilename());
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));
        memberService.updateMemberInformationImage(memberId, image);
<<<<<<< HEAD
        return ResponseEntity.noContent().build();
=======
        return HttpStatus.NO_CONTENT;
>>>>>>> c31b9a8 (feat: change dateTime)
    }


    // 회원 수정  페이지 - 이메일, 비밀번호, 소개글, 닉네임, 프로필 이미지 수정
    @PreAuthorize("hasRole('USER')")
    @PatchMapping("/{informationType}")
<<<<<<< HEAD
    public ResponseEntity<Void> updateMemberInformationCommon(@PathVariable @NotEmpty String informationType, @RequestBody Map<String, String> request, Authentication authentication){
=======
    public HttpStatus updateMemberInformationCommon(@PathVariable @NotEmpty String informationType, @RequestBody String value, Authentication authentication){
>>>>>>> c31b9a8 (feat: change dateTime)
        log.info("/members/{informationType}");
        log.info(informationType);
        String value = request.get("value");
        log.info(value);
        Long memberId = Long.valueOf(String.valueOf(authentication.getName()));

        memberService.updateMemberInformationCommon(memberId, informationType, value);
<<<<<<< HEAD
        return ResponseEntity.noContent().build();
=======
        return HttpStatus.NO_CONTENT;
>>>>>>> c31b9a8 (feat: change dateTime)
    }

    //---DeleteMapping

    //회원 수정 페이지 - 회원 탈퇴
    @PreAuthorize("hasRole('USER')")
    @DeleteMapping("")
    public ResponseEntity<Void> deleteMember(Authentication authentication){
        Long memberId = Long.valueOf(authentication.getName());
        memberService.deleteMember(memberId);
<<<<<<< HEAD
        return ResponseEntity.noContent().build();
=======
        return HttpStatus.NO_CONTENT;
>>>>>>> c31b9a8 (feat: change dateTime)
    }

}
