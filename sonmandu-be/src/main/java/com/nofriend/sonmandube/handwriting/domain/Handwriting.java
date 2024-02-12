package com.nofriend.sonmandube.handwriting.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
@ToString
public class Handwriting {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long handwritingId;

    private String name; // 폰트명

    @CreatedDate
    private LocalDateTime createDate;

    private String downloadUrl;

    private boolean isSelected; // 폰트 제작 결과로 선택됐는지 여부

    private int downloadCount;
    private int likeCount;
    private int hitCount;

    private int lastMonth; // 지난달 인기 가중치
    private int lastWeek; // 지난주 인기 가중치
    private int thisMonth; // 이번달 인기 가중치
    private int thisWeek; // 이번주 인기 가중치

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "handwriting_application_id")
    private HandwritingApplication handwritingApplication;

    public boolean getIsSelected(){
        return this.isSelected;
    }

    @PrePersist
    public void onPrePersist() {
        String customLocalDateTimeFormat = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        this.createDate = LocalDateTime.parse(customLocalDateTimeFormat, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
    }

    public void upDownloadCount() {
        this.downloadCount++;
    }

    public void upLikeCount() {
        this.likeCount++;
    }

    public void downLikeCount() {
        this.likeCount--;
    }

    public void upHitCount() {
        this.hitCount++;
    }

    public void updateLastMonth(int lastMonth) {
        this.lastMonth = lastMonth;
    }

    public void updateLastWeek(int lastWeek) {
        this.lastWeek = lastWeek;
    }

    public void plusThisMonth(int weight) {
        this.thisMonth += weight;
    }

    public void plusThisWeek(int weight) {
        this.thisWeek += weight;
    }
}
