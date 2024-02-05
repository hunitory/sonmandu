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
>>>>>>> e8fb302 (feat: findByMemeberInformation, show tropy info)
=======
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
<<<<<<< HEAD
>>>>>>> ea3e05f (feat: 배지, 트로피 수여 추가)
=======
=======
=======
import jakarta.persistence.EntityListeners;
import jakarta.persistence.PrePersist;
>>>>>>> 582ef31 (feat: 배지, 트로피 수여 추가)
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serializable;
<<<<<<< HEAD
>>>>>>> 32bc78e (feat: findByMemeberInformation, show tropy info)
<<<<<<< HEAD
>>>>>>> c539d2cc (feat: findByMemeberInformation, show tropy info)
=======
=======
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
>>>>>>> 582ef31 (feat: 배지, 트로피 수여 추가)
>>>>>>> 1061d2bd (feat: 배지, 트로피 수여 추가)

@Embeddable
@Getter
@NoArgsConstructor
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c539d2cc (feat: findByMemeberInformation, show tropy info)
=======
>>>>>>> 1061d2bd (feat: 배지, 트로피 수여 추가)
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
<<<<<<< HEAD
=======
@EntityListeners(AuditingEntityListener.class)
>>>>>>> ea3e05f (feat: 배지, 트로피 수여 추가)
public class TrophyId implements Serializable {

    @CreatedDate
    private LocalDateTime createDate;
    private int weight;
<<<<<<< HEAD
>>>>>>> e8fb302 (feat: findByMemeberInformation, show tropy info)
=======

    @PrePersist
    public void onPrePersist() {
        String customLocalDateTimeFormat = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM"));
        this.createDate = LocalDateTime.parse(customLocalDateTimeFormat, DateTimeFormatter.ofPattern("yyyy.MM"));
    }

    public TrophyId(int weight) {
        this.weight = weight;
    }

>>>>>>> ea3e05f (feat: 배지, 트로피 수여 추가)
=======
=======
=======
@EntityListeners(AuditingEntityListener.class)
>>>>>>> 582ef31 (feat: 배지, 트로피 수여 추가)
>>>>>>> 1061d2bd (feat: 배지, 트로피 수여 추가)
public class TrophyId implements Serializable {

    @CreatedDate
    private LocalDateTime createDate;
    private int weight;
<<<<<<< HEAD
>>>>>>> 32bc78e (feat: findByMemeberInformation, show tropy info)
<<<<<<< HEAD
>>>>>>> c539d2cc (feat: findByMemeberInformation, show tropy info)
=======
=======

    @PrePersist
    public void onPrePersist() {
        String customLocalDateTimeFormat = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM"));
        this.createDate = LocalDateTime.parse(customLocalDateTimeFormat, DateTimeFormatter.ofPattern("yyyy.MM"));
    }

    public TrophyId(int weight) {
        this.weight = weight;
    }

>>>>>>> 582ef31 (feat: 배지, 트로피 수여 추가)
>>>>>>> 1061d2bd (feat: 배지, 트로피 수여 추가)
}
