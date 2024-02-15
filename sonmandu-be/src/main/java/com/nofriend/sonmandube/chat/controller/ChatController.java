package com.nofriend.sonmandube.chat.controller;

import com.nofriend.sonmandube.chat.controller.request.ChatRequest;
import com.nofriend.sonmandube.chat.controller.response.ChatResponse;
import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.ChatProjection;
import com.nofriend.sonmandube.chat.repository.ChatRepository;
import com.nofriend.sonmandube.exception.IdNotFoundException;
import com.nofriend.sonmandube.handwriting.domain.HandwritingNameDownloadUrlProjection;
import com.nofriend.sonmandube.handwriting.repository.HandwritingRepository;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;
import java.util.List;

@Controller
@RequiredArgsConstructor
@Slf4j
public class ChatController {
    private final MemberRepository memberRepository;
    private final HandwritingRepository handwritingRepository;
    private final ChatRepository chatRepository;

    @MessageMapping("/sonmandu")
    @SendTo("/topic/sonmandu")
    public ChatResponse chatting(Principal principal, @Valid ChatRequest chatRequest) {
        Long memberId = Long.valueOf(principal.getName());

        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IdNotFoundException("해당하는 회원이 없습니다."));

        HandwritingNameDownloadUrlProjection handwritingNameDownloadUrlProjection = handwritingRepository.findNameDownloadUrlByHandwritingId(chatRequest.getHandwritingId());

        Chat newChat = chatRequest.toEntity(
                memberId,
                member.getNickname(),
                member.isBadge(),
                member.getImageUrl(),
                chatRequest.getHandwritingId(),
                handwritingNameDownloadUrlProjection.getName(),
                handwritingNameDownloadUrlProjection.getDownloadUrl(),
                chatRequest.getMessage()
        );

        chatRepository.save(newChat);

        return newChat.toChatResponse();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/chat")
    @ResponseBody
    public List<ChatProjection> getChat(){
        return chatRepository.findTop10ByOrderByChatIdDesc();
    }

}