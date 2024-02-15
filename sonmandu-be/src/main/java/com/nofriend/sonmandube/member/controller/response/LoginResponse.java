package com.nofriend.sonmandube.member.controller.response;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class LoginResponse {
    private String token;
    private String refreshToken;
}

