package com.nofriend.sonmandube.chat.controller.response;


import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ChatResponse {
    private Long chatId;
    private String message;
    private String createTime;
    private ChatMemberResponse chatMemberResponse;
    private ChatHandwritingResponse chatHandwritingResponse;
}
