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
<<<<<<< HEAD
import lombok.Setter;
=======
>>>>>>> 723abc5 (feat: add spring security chatting)
import lombok.ToString;
import org.springframework.stereotype.Component;

@Getter
<<<<<<< HEAD
@Setter
=======
>>>>>>> 723abc5 (feat: add spring security chatting)
@ToString
@RequiredArgsConstructor
public class ChatRequest {
    @Min(1)
    private Long handwritingId;
    @NotEmpty
    private String message;

<<<<<<< HEAD
    public Chat toEntity(Long memberId,String memberNickname,boolean memberBadge, String imageUrl, Long handwritingId,  String handwritingName, String handwritingDownloadUrl, String message) {
=======
    public Chat toEntity(Long memberId,String memberNickname, Long handwritingId, String handwritingName, String handwritingDownloadUrl, String message) {
>>>>>>> 723abc5 (feat: add spring security chatting)
        return Chat.builder()
                .member(
                        Member.builder()
                                .memberId(memberId)
                                .nickname(memberNickname)
<<<<<<< HEAD
                                .isBadge(memberBadge)
                                .imageUrl(imageUrl)
=======
>>>>>>> 723abc5 (feat: add spring security chatting)
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
