package com.nofriend.sonmandube.member.controller.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SigninRequest {
    @Min(8) @Max(20) @NotEmpty
    private String id;

    @Min(8) @Max(20) @NotEmpty
    private String password;
}
