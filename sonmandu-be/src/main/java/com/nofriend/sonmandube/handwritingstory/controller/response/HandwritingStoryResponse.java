package com.nofriend.sonmandube.handwritingstory.controller.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStory;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryComment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HandwritingStoryResponse {

    private Long handwritingStoryId;

    private String thumbnail;

    private String title;

    private String name;

    private String content;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createDate;

    private int hitCount;

    private int likeCount;

    private boolean isLike;

    @JsonProperty("isLike")
    public boolean getIsLike() {
        return isLike;
    }

    private MemberIntroductionResponse member;

    private List<HandwritingStoryCommentResponse> commentList;

    // TODO : 회원 정보, 댓글 정보 포함

    public static HandwritingStoryResponse from(HandwritingStory handwritingStory, boolean isLike) {
        return HandwritingStoryResponse.builder()
                .handwritingStoryId(handwritingStory.getHandwriting().getHandwritingId())
                .thumbnail(handwritingStory.getThumbnail())
                .name(handwritingStory.getHandwriting().getName())
                .title(handwritingStory.getTitle())
                .content(handwritingStory.getContent())
                .createDate(handwritingStory.getCreateDate())
                .hitCount(handwritingStory.getHitCount())
                .likeCount(handwritingStory.getLikeCount())
                .isLike(isLike)
                .commentList(handwritingStory.getCommentList().stream()
                        .map(HandwritingStoryCommentResponse::from).toList())
                .member(MemberIntroductionResponse.from(handwritingStory.getMember()))
                .build();
    }

}
