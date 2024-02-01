package com.nofriend.sonmandube.member.controller.response;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberInformationResponse {
    private String imageUrl;
    private String nickname;
    private boolean badge;
    private String introduction;
}
