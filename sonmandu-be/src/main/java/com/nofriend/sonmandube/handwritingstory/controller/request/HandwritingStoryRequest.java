package com.nofriend.sonmandube.handwritingstory.controller.request;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStory;
import com.nofriend.sonmandube.member.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class HandwritingStoryRequest {

    private Long handwritingId;

    private String title;

    private String content;

    public HandwritingStory toEntity(Member member, Handwriting handwriting) {
        return HandwritingStory.builder()
                .handwritingStoryId(handwritingId)
                .handwriting(handwriting)
                .member(member)
                .title(title)
                .content(content)
                .build();
    }

    public HandwritingStory toEntity(Member member, Handwriting handwriting, String thubnail) {
        return HandwritingStory.builder()
                .handwritingStoryId(handwritingId)
                .handwriting(handwriting)
                .member(member)
                .title(title)
                .content(content)
                .thumbnail(thubnail)
                .build();
    }
}
