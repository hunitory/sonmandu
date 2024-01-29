package com.nofriend.sonmandube.handwriting.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class HandwritingTagId implements Serializable {

    private int tagId;

    private Long handwritingApplicationId;

    protected HandwritingTagId() {}

    public HandwritingTagId(int tagId) {
        this.tagId = tagId;
    }
}
