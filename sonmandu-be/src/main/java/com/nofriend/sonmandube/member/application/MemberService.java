package com.nofriend.sonmandube.member.application;

import com.nofriend.sonmandube.member.controller.request.*;
import com.nofriend.sonmandube.member.controller.response.TokenResponse;

public interface MemberService {
    TokenResponse signin(LoginRequest loginRequest);

    void signup(SignupRequest signupRequest);

    void findPassword(FindPasswordRequest findPasswordRequest);

    void findId(FindIdRequest findIdRequest);

    String refreshAccessToken();

    void sendEmailToken(String email);

    void validateEmail(ValidateEmailRequest validateEmailRequest);

    boolean checkUniqueNickname(String nickname);

    boolean checkUniquepassword(String password);

    boolean checkUniqueId(String id);
}
