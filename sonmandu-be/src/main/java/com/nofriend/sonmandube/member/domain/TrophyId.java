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
<<<<<<< HEAD
import jakarta.persistence.EntityListeners;
import jakarta.persistence.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
<<<<<<< HEAD
>>>>>>> f6ae44c4 (feat: findByMemeberInformation, show tropy info)
=======
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
<<<<<<< HEAD
>>>>>>> 04aa4842 (feat: 배지, 트로피 수여 추가)
=======
=======
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
>>>>>>> 32bc78e (feat: findByMemeberInformation, show tropy info)
>>>>>>> 8c1d3dea (feat: findByMemeberInformation, show tropy info)

@Embeddable
@Getter
@NoArgsConstructor
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8c1d3dea (feat: findByMemeberInformation, show tropy info)
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
<<<<<<< HEAD
=======
@EntityListeners(AuditingEntityListener.class)
>>>>>>> 04aa4842 (feat: 배지, 트로피 수여 추가)
public class TrophyId implements Serializable {

    @CreatedDate
    private LocalDateTime createDate;
    private int weight;
<<<<<<< HEAD
>>>>>>> f6ae44c4 (feat: findByMemeberInformation, show tropy info)
=======

    @PrePersist
    public void onPrePersist() {
        String customLocalDateTimeFormat = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM"));
        this.createDate = LocalDateTime.parse(customLocalDateTimeFormat, DateTimeFormatter.ofPattern("yyyy.MM"));
    }

    public TrophyId(int weight) {
        this.weight = weight;
    }

>>>>>>> 04aa4842 (feat: 배지, 트로피 수여 추가)
=======
public class TrophyId implements Serializable {
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy. MM", timezone="Asia/Seoul")
    private String createDate;
    private int weight;
>>>>>>> 32bc78e (feat: findByMemeberInformation, show tropy info)
>>>>>>> 8c1d3dea (feat: findByMemeberInformation, show tropy info)
}
