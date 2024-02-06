package com.nofriend.sonmandube.chat.controller.response;


<<<<<<< HEAD
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
=======
public class ChatResponse {
}
>>>>>>> 723abc5 (feat: add spring security chatting)
