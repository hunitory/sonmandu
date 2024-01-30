package com.nofriend.sonmandube.member.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Builder

public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;

    private String id;

    private String password;

    private String name;

    private String nickname;

    private String email;

    private String imageUrl;

    private String introduction;

    private String refreshToken;

    private boolean isValidated;

    private String emailToken;

    public void succeedEmailToken(){
        this.isValidated = true;
    }

}
