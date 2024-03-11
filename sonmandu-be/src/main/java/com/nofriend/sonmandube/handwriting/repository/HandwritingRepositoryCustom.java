package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;

import java.util.List;

public interface HandwritingRepositoryCustom {

    List<Handwriting> findByDynamicConditions(int start, int count, SearchConditionRequest conditions);

}
