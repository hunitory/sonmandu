package com.nofriend.sonmandube.chat.domain;

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
public class Chat implements ChatProjection{
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
        this.createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("a H:mm", Locale.KOREAN));
    }

    public HandwritingProjection getHandwriting() {
        return (HandwritingProjection) this.handwriting;
    }

    public MemberProjection getMember() {
        return (MemberProjection) this.member;
    }

    //    public ChatResponse toChatResponse(){
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

}
