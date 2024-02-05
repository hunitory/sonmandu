package com.nofriend.sonmandube.chat.domain;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.context.annotation.Primary;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@ToString
public class Chat {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatId;

    private String message;

    @CreatedDate
    private LocalDateTime createTime;

    @ManyToOne
    @JoinColumn(name = "handwriting_id")
    private Handwriting handwriting;


}
