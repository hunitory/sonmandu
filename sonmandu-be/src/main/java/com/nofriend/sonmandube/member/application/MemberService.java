package com.nofriend.sonmandube.member.application;


import com.nofriend.sonmandube.member.controller.request.*;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
import com.nofriend.sonmandube.member.controller.response.LoginResponse;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;

public interface MemberService {
    void signup(SignupRequest signupRequest) throws MessagingException;

    LoginResponse login(LoginRequest loginRequest);

    void logout(Long memberId);

    boolean checkValidPassword(Long memberId, String password);

    MeInformationResponse findMeInformation(Long memberId);

    MemberInformationResponse findMemberInformationAll(Long memberId);

    void findMemberInformationId(String email, String name) throws MessagingException;

    void findMemberInformationPassword(String email, String name, String id) throws MessagingException;

    Boolean checkUniqueId(String id);

    Boolean checkUniqueNickname(String nickname);

    HttpStatus updateIsValidated(EmailValidationRequest emailValidationRequest);

    void updateMemberInformation(Long memberId, String informationType, String value);

    void deleteMember(Long memberId);
}
