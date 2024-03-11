package com.nofriend.sonmandube.member.domain;

import jakarta.persistence.Embeddable;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.PrePersist;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Embeddable
@Getter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class TrophyId implements Serializable {

    @CreatedDate
    private LocalDateTime createDate;
    private int weight;

    public TrophyId(int i) {
    }

    @PrePersist
    public void onPrePersist() {
        String customLocalDateTimeFormat = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM"));
        this.createDate = LocalDateTime.parse(customLocalDateTimeFormat, DateTimeFormatter.ofPattern("yyyy.MM"));
    }

}
