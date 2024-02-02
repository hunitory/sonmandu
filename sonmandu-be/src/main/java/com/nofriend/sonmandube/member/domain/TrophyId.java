package com.nofriend.sonmandube.member.domain;

<<<<<<< HEAD
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
=======
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
>>>>>>> e8fb302 (feat: findByMemeberInformation, show tropy info)

@Embeddable
@Getter
@NoArgsConstructor
<<<<<<< HEAD
@EntityListeners(AuditingEntityListener.class)
public class TrophyId implements Serializable {

    @CreatedDate
    private LocalDateTime createDate;
    private int weight;

    @PrePersist
    public void onPrePersist() {
        String customLocalDateTimeFormat = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM"));
        this.createDate = LocalDateTime.parse(customLocalDateTimeFormat, DateTimeFormatter.ofPattern("yyyy.MM"));
    }

    public TrophyId(int weight) {
        this.weight = weight;
    }

=======
@AllArgsConstructor
public class TrophyId implements Serializable {
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy. MM", timezone="Asia/Seoul")
    private String createDate;
    private int weight;
>>>>>>> e8fb302 (feat: findByMemeberInformation, show tropy info)
}
