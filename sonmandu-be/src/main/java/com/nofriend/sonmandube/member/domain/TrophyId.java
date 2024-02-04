package com.nofriend.sonmandube.member.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TrophyId implements Serializable {
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy. MM", timezone="Asia/Seoul")
    private String createDate;
    private int weight;
}
