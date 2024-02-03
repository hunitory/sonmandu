package com.nofriend.sonmandube.member.controller.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class TokenResponse {

    private String token;

    private String refreshToken;

}
