package com.nofriend.sonmandube.handwriting.domain;

import lombok.Getter;

@Getter
public enum HandwritingCountType {
    LIKES_UP(3), LIKES_DOWN(-3), HIT_UP(1), DOWNLOAD_UP(6);

    private final int value;

    HandwritingCountType(int value) {
        this.value = value;
    }

}
