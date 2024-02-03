package com.nofriend.sonmandube.member.controller.request;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class SignupRequest {
    @Size(min = 8, max = 20) @NotEmpty
    private String id;

    @Size(min = 8, max = 20) @NotEmpty
    private String password;

    @Size(min = 2, max = 30) @NotEmpty
    private String name;

    @Size(min = 2, max = 12) @NotEmpty
    private String nickname;

    @Email @NotEmpty
    private String email;
}
