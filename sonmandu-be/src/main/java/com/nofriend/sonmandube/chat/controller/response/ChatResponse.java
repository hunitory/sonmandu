package com.nofriend.sonmandube.chat.controller.response;


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 25c114c (test: chatting principal)
import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.ChatProjection;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import lombok.Builder;
import lombok.Getter;

<<<<<<< HEAD
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
=======
//@Getter
@Builder
public class ChatResponse{//} extends Chat implements ChatProjection {
//    @Override
//    public Long getChatId() {
//        return this.getChatId();
//    }
//
//    @Override
//    public String getMessage() {
//        return null;
//    }
//
//    @Override
//    public String getCreateTime() {
//        return null;
//    }
//
//    @Override
//    public MemberProjection getMember() {
//        return null;
//    }
//
//    @Override
//    public HandwritingProjection getHandwriting() {
//        return null;
//    }
//    private Long chatId;
//    private String message;
//    private String createTime;
//    private Member member;
//
//    private Handwriting handwriting;
//
//    public class Member{
//        public Long memberId;
//        public String nickName;
//    }
//
//    public class Handwriting{
//        private Long handwritingId;
//        private String name;
//        private String downloadUrl;
//    }


>>>>>>> 25c114c (test: chatting principal)
}
>>>>>>> 723abc5 (feat: add spring security chatting)
