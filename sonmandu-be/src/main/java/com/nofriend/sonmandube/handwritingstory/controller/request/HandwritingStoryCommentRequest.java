package com.nofriend.sonmandube.handwritingstory.controller.request;

import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStory;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryComment;
import com.nofriend.sonmandube.member.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class HandwritingStoryCommentRequest {

    private String content;

    public HandwritingStoryComment toEntity(Member member, HandwritingStory handwritingStory) {
        return HandwritingStoryComment.builder()
                .content(content)
                .member(member)
                .handwritingStory(handwritingStory)
                .build();
    }
}
