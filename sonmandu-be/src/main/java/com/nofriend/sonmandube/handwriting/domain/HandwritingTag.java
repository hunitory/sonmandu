package com.nofriend.sonmandube.handwriting.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HandwritingTag {

    @EmbeddedId
    private HandwritingTagId handwritingTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "handwriting_application_id")
    @MapsId("handwritingApplicationId")
    private HandwritingApplication handwritingApplication;


    // 연관관계 메서드
    public void setHandwritingApplication(HandwritingApplication handwritingApplication) {
        this.handwritingApplication = handwritingApplication;

    }
}
