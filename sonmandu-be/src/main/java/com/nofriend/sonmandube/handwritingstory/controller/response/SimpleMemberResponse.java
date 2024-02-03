package com.nofriend.sonmandube.handwritingstory.controller.response;

import com.nofriend.sonmandube.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SimpleMemberResponse {

    private Long memberId;

    private String name;

    private String imageUrl;

    public static SimpleMemberResponse from(Member member) {
        return new SimpleMemberResponse(member.getMemberId(), member.getName(), member.getImageUrl());
    }
}
