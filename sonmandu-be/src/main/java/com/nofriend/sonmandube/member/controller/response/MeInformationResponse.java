package com.nofriend.sonmandube.member.controller.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Builder
@ToString
@Getter
public class MeInformationResponse {
    private String nickname;
    private String id;
    private String name;
    private String email;
}
