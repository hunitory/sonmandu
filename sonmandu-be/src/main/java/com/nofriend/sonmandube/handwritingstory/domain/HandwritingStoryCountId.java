package com.nofriend.sonmandube.handwritingstory.domain;

import jakarta.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Getter
@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class HandwritingStoryCountId implements Serializable {

    private Long memberId;

    private Long handwritingStoryId;

}
