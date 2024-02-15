package com.nofriend.sonmandube.member.controller.response;

import com.nofriend.sonmandube.member.domain.Trophy;
import com.nofriend.sonmandube.member.domain.TrophyId;
import com.nofriend.sonmandube.member.domain.TrophyIdMapping;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class MemberInformationResponse {
    private String imageUrl;
    private String nickname;
    private boolean badge;
    private String introduction;
    private List<TrophyIdMapping> trophies;
}


