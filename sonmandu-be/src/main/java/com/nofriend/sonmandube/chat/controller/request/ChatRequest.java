package com.nofriend.sonmandube.chat.controller.request;

import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.HandwritingNameDownloadUrlProjection;
import com.nofriend.sonmandube.handwriting.repository.HandwritingRepository;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class ChatRequest {
    @Min(1)
    private Long handwritingId;
    @NotEmpty
    private String message;

    public Chat toEntity(Long memberId,String memberNickname,boolean memberBadge, String imageUrl, Long handwritingId,  String handwritingName, String handwritingDownloadUrl, String message) {
        return Chat.builder()
                .member(
                        Member.builder()
                                .memberId(memberId)
                                .nickname(memberNickname)
                                .isBadge(memberBadge)
                                .imageUrl(imageUrl)
                                .build()
                )
                .handwriting(
                        Handwriting.builder()
                                .handwritingId(handwritingId)
                                .name(handwritingName)
                                .downloadUrl(handwritingDownloadUrl)
                                .build()
                )
                .message(message)
                .build();
    }
}
