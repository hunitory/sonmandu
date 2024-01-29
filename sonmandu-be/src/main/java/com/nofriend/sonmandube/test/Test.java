package com.nofriend.sonmandube.test;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor( access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "test")
public class Test {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    private String password;
}
