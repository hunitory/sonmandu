package com.nofriend.sonmandube.member.controller.request;

import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class LoginRequest {
    @Size(min = 8, max = 20)
    private String id;

    @Size(min = 8, max = 20)
    private String password;

}
