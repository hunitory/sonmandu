package com.nofriend.sonmandube.handwriting.controller.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class SearchConditionRequest {

    private String sort;

    private String title;

    private String name;

    private List<Integer> tagIdList;

    public SearchConditionRequest(String sort, String name, List<Integer> tagIdList) {
        this.sort = sort;
        this.name = name;
        this.tagIdList = tagIdList;
    }

    public SearchConditionRequest(String sort, String title, String name) {
        this.sort = sort;
        this.title = title;
        this.name = name;
    }
}
