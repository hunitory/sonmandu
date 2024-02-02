package com.nofriend.sonmandube.member.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Embeddable;
<<<<<<< HEAD
import jakarta.persistence.EntityListeners;
import jakarta.persistence.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
=======
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
>>>>>>> 32bc78e (feat: findByMemeberInformation, show tropy info)

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
>>>>>>> 32bc78e (feat: findByMemeberInformation, show tropy info)
}
