package com.nofriend.sonmandube.chat.domain;

import com.nofriend.sonmandube.chat.controller.response.ChatHandwritingResponse;
import com.nofriend.sonmandube.chat.controller.response.ChatMemberResponse;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.nofriend.sonmandube.chat.controller.response.ChatHandwritingResponse;
import com.nofriend.sonmandube.chat.controller.response.ChatMemberResponse;
import com.nofriend.sonmandube.chat.controller.response.ChatResponse;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Builder
@ToString
@EntityListeners(AuditingEntityListener.class)
public class Chat{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
    private Long chatId;

    private String message;

    private String createTime;

    @ManyToOne
    @JoinColumn(name = "handwriting_id")
    private Handwriting handwriting;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

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

}
