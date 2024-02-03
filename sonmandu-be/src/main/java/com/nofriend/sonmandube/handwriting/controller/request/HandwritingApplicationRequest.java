package com.nofriend.sonmandube.handwriting.controller.request;

import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import com.nofriend.sonmandube.member.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Getter
public class HandwritingApplicationRequest {

    private String name; // 폰트명

    private List<Integer> tagIdList; // 태그

    public HandwritingApplication toEntity(String imageUrl, Member member){
        return HandwritingApplication.builder()
                .name(name)
                .imageUrl(imageUrl)
                .member(member)
                .build();
    }
}
