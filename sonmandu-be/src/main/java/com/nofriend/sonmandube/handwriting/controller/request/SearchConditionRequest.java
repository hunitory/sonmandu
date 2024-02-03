package com.nofriend.sonmandube.handwriting.controller.request;

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
}
