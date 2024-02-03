package com.nofriend.sonmandube.member.controller.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
public class LoginResponse {

    private String token;
    private String refreshToken;

}
