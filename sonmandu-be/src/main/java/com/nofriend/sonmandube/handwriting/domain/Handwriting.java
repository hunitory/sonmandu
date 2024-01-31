package com.nofriend.sonmandube.handwriting.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "handwriting_application_id")
    private HandwritingApplication handwritingApplication;
}
