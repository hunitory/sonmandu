package com.nofriend.sonmandube.member.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Builder
@ToString
public class EmailToken {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long EmailTokenId;
    private String token;
}

