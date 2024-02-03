package com.nofriend.sonmandube.handwritingstory.controller.response;

import com.nofriend.sonmandube.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberIntroductionResponse {

    private Long memberId;

    private String name;

    private String imageUrl;

    private String introduction;

    public static MemberIntroductionResponse from(Member member) {
        return new MemberIntroductionResponse(
                member.getMemberId(),
                member.getName(),
                member.getImageUrl(),
                member.getIntroduction()
        );
    }
}
