package com.nofriend.sonmandube.member.controller.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.awt.*;

@Getter
@Setter
public class LoginRequest {
    @Min(8) @Max(20)
    private String id;

    @Min(8) @Max(20)
    private String password;
}
