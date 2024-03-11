package com.nofriend.sonmandube.handwritingstory.repository;

import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStory;

import java.util.List;

public interface HandwritingStoryRepositoryCustom {

    List<HandwritingStory> findByDynamicConditions(int start, int count, SearchConditionRequest conditions);

}
