package com.nofriend.sonmandube.handwriting.domain;

import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class HandwritingApplication {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long handwritingApplicationId;

    private String name;

    @CreatedDate
    private LocalDate createDate;

    private String imageUrl;

    @ColumnDefault("1")
    @Builder.Default
    private int state = 1;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder.Default
    @OneToMany(mappedBy = "handwritingApplication")
    private List<HandwritingTag> handwritingTagList = new ArrayList<>();


    // 연관관계 메서드
    public void addHandwritingTag(HandwritingTag handwritingTag) {
        if(handwritingTagList == null) handwritingTagList = new ArrayList<>();
        handwritingTagList.add(handwritingTag);
        handwritingTag.setHandwritingApplication(this);
    }

}
