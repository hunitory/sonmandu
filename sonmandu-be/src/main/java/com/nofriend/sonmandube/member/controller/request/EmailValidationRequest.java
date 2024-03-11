package com.nofriend.sonmandube.member.controller.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class EmailValidationRequest {
    @NotEmpty
    Long memberId;

    @NotEmpty
    String emailToken;
}
