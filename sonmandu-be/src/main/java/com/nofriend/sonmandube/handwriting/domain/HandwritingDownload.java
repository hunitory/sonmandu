package com.nofriend.sonmandube.handwriting.domain;

import com.nofriend.sonmandube.member.domain.Member;
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
public class HandwritingDownload {

    @EmbeddedId
    private HandwritingCountId handwritingDownloadId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "handwriting_id")
    @MapsId("handwritingId")
    private Handwriting handwriting;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    @MapsId("memberId")
    private Member member;
}
