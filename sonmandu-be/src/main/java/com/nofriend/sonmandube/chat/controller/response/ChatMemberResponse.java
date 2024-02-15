package com.nofriend.sonmandube.chat.controller.response;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ChatMemberResponse {
    private Long memberId;
    private String nickname;
    private boolean badge;
    private String imageUrl;
}
