package com.nofriend.sonmandube.handwritingstory.domain;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.xml.stream.events.Comment;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class HandwritingStory {

    @Id
    private Long handwritingStoryId;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId("handwritingStoryId")
    @JoinColumn(name = "handwriting_id")
    private Handwriting handwriting;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder.Default
    @OneToMany(mappedBy = "handwritingStory", cascade = CascadeType.ALL)
    List<HandwritingStoryComment> commentList = new ArrayList<>();

    @Setter
    private String title;

    @Setter
    private String content;

    @CreatedDate
    private LocalDateTime createDate;

    private int hitCount;

    private int likeCount;

    private int weight;

    @Setter
    private String thumbnail;

    @PrePersist
    public void onPrePersist() {
        String customLocalDateTimeFormat = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분"));
        this.createDate = LocalDateTime.parse(customLocalDateTimeFormat, DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분"));
    }

    public void upHitCount() {
        this.hitCount++;
    }

    public void upLikeCount() {
        this.likeCount++;
    }

    public void downLikeCount() {
        this.likeCount--;
    }

    public void plusWeight(int value) {
        this.weight += value;
    }
}
