package com.nofriend.sonmandube.handwritingstory.domain;

import lombok.Getter;

@Getter
public enum HandwritingStoryCountType {
    LIKES_UP(3), LIKES_DOWN(-3), HIT_UP(1);

    private final int value;

    HandwritingStoryCountType(int value) {
        this.value = value;
    }

}
