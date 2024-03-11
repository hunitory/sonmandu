package com.nofriend.sonmandube.handwriting.controller.response;

import com.nofriend.sonmandube.handwriting.controller.response.RankingHandwritingResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RankingResponse {

    private List<RankingHandwritingResponse> thisMonthHandwriting;

    private List<RankingHandwritingResponse> thisWeekHandwriting;
}
