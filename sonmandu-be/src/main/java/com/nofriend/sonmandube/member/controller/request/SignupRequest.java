package com.nofriend.sonmandube.member.controller.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class SignupRequest {
    @Min(8) @Max(20) @NotEmpty
    private String id;

    @Min(8) @Max(20) @NotEmpty
    private String passwod;

    @Min(2) @Max(30) @NotEmpty
    private String name;

    @Min(2) @Max(12) @NotEmpty
    private String nickname;

    @Email @NotEmpty
    private String email;
}
