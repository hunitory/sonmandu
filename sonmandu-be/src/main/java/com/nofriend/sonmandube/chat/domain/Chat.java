package com.nofriend.sonmandube.chat.domain;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import com.nofriend.sonmandube.chat.controller.response.ChatHandwritingResponse;
import com.nofriend.sonmandube.chat.controller.response.ChatMemberResponse;
=======
import com.fasterxml.jackson.annotation.JsonFormat;
>>>>>>> e3c4175 (test: chatting principal)
=======
import com.nofriend.sonmandube.chat.controller.response.ChatHandwritingResponse;
import com.nofriend.sonmandube.chat.controller.response.ChatMemberResponse;
>>>>>>> 9809c16 (feat: chatting)
import com.nofriend.sonmandube.chat.controller.response.ChatResponse;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
=======
=======
import com.fasterxml.jackson.annotation.JsonFormat;
>>>>>>> 723abc5 (feat: add spring security chatting)
=======
>>>>>>> 25c114c (test: chatting principal)
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
<<<<<<< HEAD
>>>>>>> bb48a11 (feat: add WebSocket)
=======
import java.time.format.DateTimeFormatter;
<<<<<<< HEAD
>>>>>>> 723abc5 (feat: add spring security chatting)
=======
import java.util.Locale;
>>>>>>> 47367c4 (teat: wss)

@Entity
@Getter
@AllArgsConstructor
<<<<<<< HEAD
<<<<<<< HEAD
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Builder
@ToString
@EntityListeners(AuditingEntityListener.class)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e3c4175 (test: chatting principal)
public class Chat{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
=======
@NoArgsConstructor(access = AccessLevel.PROTECTED)
=======
@NoArgsConstructor(access = AccessLevel.PUBLIC)
>>>>>>> 723abc5 (feat: add spring security chatting)
@Builder
@ToString
@EntityListeners(AuditingEntityListener.class)
public class Chat {
=======
public class Chat implements ChatProjection{
>>>>>>> 25c114c (test: chatting principal)
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
>>>>>>> bb48a11 (feat: add WebSocket)
=======
    @Column(name = "chat_id")
>>>>>>> 723abc5 (feat: add spring security chatting)
    private Long chatId;

    private String message;

<<<<<<< HEAD
<<<<<<< HEAD
    private String createTime;
=======
    @CreatedDate
    private LocalDateTime createTime;
>>>>>>> bb48a11 (feat: add WebSocket)
=======
    private String createTime;
>>>>>>> 723abc5 (feat: add spring security chatting)

    @ManyToOne
    @JoinColumn(name = "handwriting_id")
    private Handwriting handwriting;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 723abc5 (feat: add spring security chatting)
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @PrePersist
    public void onPrePersist() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b6d63cf (fix: date format)
        this.createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("a h:mm", Locale.KOREAN));
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9809c16 (feat: chatting)
    public ChatResponse toChatResponse(){
        return ChatResponse.builder()
                .chatId(this.chatId)
                .message(this.message)
                .createTime(this.createTime)
                .chatMemberResponse(
                        ChatMemberResponse.builder()
                                .memberId(this.member.getMemberId())
                                .nickname(this.member.getNickname())
<<<<<<< HEAD
<<<<<<< HEAD
                                .badge(this.member.isBadge())
                                .imageUrl(this.member.getImageUrl())
<<<<<<< HEAD
=======
>>>>>>> 9809c16 (feat: chatting)
=======
                                .badge(this.member.isBadge())
>>>>>>> 5ea57fa (feat: add chat member)
=======
>>>>>>> dd08f31 (feat: add member image url in chat)
                                .build()
                )
                .chatHandwritingResponse(
                        ChatHandwritingResponse.builder()
                                .handwritingId(this.handwriting.getHandwritingId())
                                .name(this.handwriting.getName())
                                .downloadUrl(this.handwriting.getDownloadUrl())
                                .build()
                )
                .build();
    }
<<<<<<< HEAD
=======
>>>>>>> bb48a11 (feat: add WebSocket)
=======
        this.createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("a H:mm"));
=======
        this.createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("a H:mm", Locale.KOREAN));
>>>>>>> 47367c4 (teat: wss)
    }

>>>>>>> 723abc5 (feat: add spring security chatting)
=======
    public HandwritingProjection getHandwriting() {
        return (HandwritingProjection) this.handwriting;
    }

    public MemberProjection getMember() {
        return (MemberProjection) this.member;
    }

    //    public ChatResponse toChatResponse(){
=======
//    public ChatResponse toChatResponse(){
>>>>>>> e3c4175 (test: chatting principal)
//        return ChatResponse.builder()
//                .chatId(this.chatId)
//                .message(this.message)
//                .createTime(this.createTime)
//                .member(
//
//
//                )
//                .handwriting(
//                        ChatResponse.Handwriting.builder()
//                                .handwritingId(this.handwriting.getHandwritingId())
//                                .name(this.handwriting.getName())
//                                .downloadUrl(this.handwriting.getDownloadUrl())
//                                .build()
//                )
//                .build();
//    }
>>>>>>> 25c114c (test: chatting principal)
=======
>>>>>>> 9809c16 (feat: chatting)

}
