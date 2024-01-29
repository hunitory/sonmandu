package com.nofriend.sonmandube.member.application;

import com.nofriend.sonmandube.member.controller.request.SigninRequest;
import com.nofriend.sonmandube.member.controller.request.SignupRequest;
import com.nofriend.sonmandube.member.controller.response.TokenResponse;

public interface MemberService {
    TokenResponse signin(SigninRequest loginRequest);

    void signup(SignupRequest signupRequest);
}
