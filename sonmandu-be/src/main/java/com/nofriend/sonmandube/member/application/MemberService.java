package com.nofriend.sonmandube.member.application;


import com.nofriend.sonmandube.member.controller.request.*;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
import com.nofriend.sonmandube.member.controller.response.TokenResponse;

public interface MemberService {
    void signup(SignupRequest signupRequest);

    TokenResponse login(LoginRequest loginRequest);

    void logout(Long memberId);

    boolean checkVaildPassword(String password);

    MeInformationResponse findMeInformation(Long memberId);

    MemberInformationResponse findMemberInformationAll(Long memberId);

    void findMemberInformationId(String email, String name);

    void findMemberInfomationPassword(String email, String name, String id);

    Boolean checkUniqueId(String id);

    Boolean checkUniqueNickname(String nickname);

    void updateIsValidated(EmailValidationRequest emailValidationRequest);

    void updateMemberInformation(Long memberId, String informationType, String value);

    void deleteMember(Long memberId);
}
