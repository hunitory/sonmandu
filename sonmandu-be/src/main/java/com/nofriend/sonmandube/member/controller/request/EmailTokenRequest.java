package com.nofriend.sonmandube.member.controller.request;


import jakarta.validation.constraints.Min;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmailTokenRequest {
    @Min(1)
    private Long emailTokenId;
    private String token;

}
