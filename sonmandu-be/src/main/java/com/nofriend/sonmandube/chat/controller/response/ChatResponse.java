package com.nofriend.sonmandube.chat.controller.response;


import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.ChatProjection;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import lombok.Builder;
import lombok.Getter;

//@Builder
@Builder
@Getter
public class ChatResponse {
    private Long chatId;
    private String message;
    private String createTime;
    private ChatMemberResponse chatMemberResponse;
    private ChatHandwritingResponse chatHandwritingResponse;
}