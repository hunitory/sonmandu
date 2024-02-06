package com.nofriend.sonmandube.chat.domain;

<<<<<<< HEAD
<<<<<<< HEAD
import com.nofriend.sonmandube.chat.controller.response.ChatHandwritingResponse;
import com.nofriend.sonmandube.chat.controller.response.ChatMemberResponse;
import com.nofriend.sonmandube.chat.controller.response.ChatResponse;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.time.LocalDateTime;
=======
=======
import com.fasterxml.jackson.annotation.JsonFormat;
>>>>>>> 1726fcf0 (feat: add spring security chatting)
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.cglib.core.Local;
import org.springframework.context.annotation.Primary;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
<<<<<<< HEAD
>>>>>>> 1c9b337f (feat: add WebSocket)
=======
import java.time.format.DateTimeFormatter;
>>>>>>> 1726fcf0 (feat: add spring security chatting)

@Entity
@Getter
@AllArgsConstructor
<<<<<<< HEAD
<<<<<<< HEAD
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Builder
@ToString
@EntityListeners(AuditingEntityListener.class)
public class Chat{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
=======
@NoArgsConstructor(access = AccessLevel.PROTECTED)
=======
@NoArgsConstructor(access = AccessLevel.PUBLIC)
>>>>>>> 1726fcf0 (feat: add spring security chatting)
@Builder
@ToString
@EntityListeners(AuditingEntityListener.class)
public class Chat {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
>>>>>>> 1c9b337f (feat: add WebSocket)
=======
    @Column(name = "chat_id")
>>>>>>> 1726fcf0 (feat: add spring security chatting)
    private Long chatId;

    private String message;

<<<<<<< HEAD
<<<<<<< HEAD
    private String createTime;
=======
    @CreatedDate
    private LocalDateTime createTime;
>>>>>>> 1c9b337f (feat: add WebSocket)
=======
    private String createTime;
>>>>>>> 1726fcf0 (feat: add spring security chatting)

    @ManyToOne
    @JoinColumn(name = "handwriting_id")
    private Handwriting handwriting;

<<<<<<< HEAD
<<<<<<< HEAD
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
=======
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @PrePersist
    public void onPrePersist() {
        this.createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("a H:mm"));
    }

>>>>>>> 1726fcf0 (feat: add spring security chatting)

    @PrePersist
    public void onPrePersist() {
        this.createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("a h:mm", Locale.KOREAN));
    }

    public ChatResponse toChatResponse(){
        return ChatResponse.builder()
                .chatId(this.chatId)
                .message(this.message)
                .createTime(this.createTime)
                .chatMemberResponse(
                        ChatMemberResponse.builder()
                                .memberId(this.member.getMemberId())
                                .nickname(this.member.getNickname())
                                .badge(this.member.isBadge())
                                .imageUrl(this.member.getImageUrl())
                                .badge(this.member.isBadge())
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
=======

>>>>>>> 1c9b337f (feat: add WebSocket)
}
