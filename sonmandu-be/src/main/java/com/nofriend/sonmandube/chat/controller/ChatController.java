package com.nofriend.sonmandube.chat.controller;

import com.nofriend.sonmandube.chat.controller.request.ChatRequest;
import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.ChatProjection;
import com.nofriend.sonmandube.chat.repository.ChatRepository;
import com.nofriend.sonmandube.handwriting.domain.HandwritingNameDownloadUrlProjection;
import com.nofriend.sonmandube.handwriting.repository.HandwritingRepository;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequiredArgsConstructor
@Slf4j
public class ChatController {
    private final MemberRepository memberRepository;
    private final HandwritingRepository handwritingRepository;
    private final ChatRepository chatRepository;
    private final JwtProvider jwtProvider;


    @MessageMapping("/sonmandu")
    @SendTo("/topic/sonmandu")
    public Chat chatting(@Valid ChatRequest chatRequest, @Header("Authorization") String token) {
    log.info("chatting1");
        token = token.substring(7);

//        Long memberId = Long.valueOf(jwtProvider.getAuthentication(token).getName());
    Long memberId = 1L;
    chatRequest.setHandwritingId(1L);
    chatRequest.setMessage("fsdf");
        String memberNickname = memberRepository.findNicknameByMemberId(memberId).getNickname();

        HandwritingNameDownloadUrlProjection handwritingNameDownloadUrlProjection = handwritingRepository.findNameDownloadUrlByHandwritingId(chatRequest.getHandwritingId());

        Chat newChat = chatRequest.toEntity(
                memberId,
                memberNickname,
                chatRequest.getHandwritingId(),
"1","!'",
//                handwritingNameDownloadUrlProjection.getName(),
//                handwritingNameDownloadUrlProjection.getDownloadUrl(),
                chatRequest.getMessage()
        );

//        chatRepository.save(newChat);
        log.info("send message: " + newChat.getMessage() + ", pub: " + newChat.getMember().getMemberId() );

        return newChat;
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/chat")
    @ResponseBody
    public List<ChatProjection> getChat(){
        return chatRepository.findTop20ByOrderByChatIdDesc();
    }

}