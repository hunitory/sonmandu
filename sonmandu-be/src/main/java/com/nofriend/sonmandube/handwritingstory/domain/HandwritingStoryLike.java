package com.nofriend.sonmandube.handwritingstory.domain;

import com.nofriend.sonmandube.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class HandwritingStoryLike {

    @EmbeddedId
    private HandwritingStoryCountId handwritingStoryLikeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    @MapsId("memberId")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "handwriting_story_Id")
    @MapsId("handwritingStoryId")
    private HandwritingStory handwritingStory;
}
