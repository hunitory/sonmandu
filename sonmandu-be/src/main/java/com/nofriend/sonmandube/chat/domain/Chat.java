package com.nofriend.sonmandube.chat.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.cglib.core.Local;
import org.springframework.context.annotation.Primary;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Builder
@ToString
@EntityListeners(AuditingEntityListener.class)
public class Chat {
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
        this.createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("a H:mm"));
    }


}
