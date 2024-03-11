package com.nofriend.sonmandube.handwriting.controller.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
public class UnwrittenStoriesResponse {
    private Long handwritingId;
    private String name;
}
