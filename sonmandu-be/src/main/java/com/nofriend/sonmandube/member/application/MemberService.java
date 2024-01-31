package com.nofriend.sonmandube.member.application;


import com.nofriend.sonmandube.member.controller.request.*;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
import com.nofriend.sonmandube.member.controller.response.LoginResponse;
import jakarta.mail.MessagingException;
import org.springframework.http.HttpStatus;

public interface MemberService {
    void signup(SignupRequest signupRequest) throws MessagingException;

    LoginResponse login(LoginRequest loginRequest);

    void logout(Long memberId);

    boolean checkValidPassword(String password);

    MeInformationResponse findMeInformation(Long memberId);

    MemberInformationResponse findMemberInformationAll(Long memberId);

    void findMemberInformationId(String email, String name);

    void findMemberInformationPassword(String email, String name, String id);

    Boolean checkUniqueId(String id);

    Boolean checkUniqueNickname(String nickname);

    HttpStatus updateIsValidated(EmailValidationRequest emailValidationRequest);

    void updateMemberInformation(Long memberId, String informationType, String value);

    void deleteMember(Long memberId);
}
