package com.nofriend.sonmandube.chat.controller.response;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ChatHandwritingResponse {
    private Long handwritingId;
    private String name;
    private String downloadUrl;

}
