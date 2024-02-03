package com.nofriend.sonmandube.handwritingstory.controller.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryComment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class HandwritingStoryCommentResponse {

    private Long commentId;

    private String content;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm")
    private LocalDateTime createDate;

    private SimpleMemberResponse member;

    public static HandwritingStoryCommentResponse from(HandwritingStoryComment comment) {
        return new HandwritingStoryCommentResponse(
                comment.getHandwritingStoryCommentId(),
                comment.getContent(),
                comment.getCreateDate(),
                SimpleMemberResponse.from(comment.getMember()));
    }
}
