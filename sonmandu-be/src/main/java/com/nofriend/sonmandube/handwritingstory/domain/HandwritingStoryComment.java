package com.nofriend.sonmandube.handwritingstory.domain;

import com.nofriend.sonmandube.handwritingstory.controller.response.HandwritingStoryCommentResponse;
import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class HandwritingStoryComment {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long handwritingStoryCommentId;

    @Setter
    private String content;

    @CreatedDate
    private LocalDateTime createDate;

    @PrePersist
    public void onPrePersist() {
        String customLocalDateTimeFormat = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        this.createDate = LocalDateTime.parse(customLocalDateTimeFormat, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "handwriting_story_id")
    private HandwritingStory handwritingStory;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

}
