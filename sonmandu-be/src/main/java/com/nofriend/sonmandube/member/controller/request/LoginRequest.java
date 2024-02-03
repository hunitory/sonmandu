package com.nofriend.sonmandube.member.controller.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    @Size(min = 8, max = 20)
    @NotEmpty
    private String id;

    @Size(min = 8, max = 20)
    @NotEmpty
    private String password;
}
