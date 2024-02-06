package com.nofriend.sonmandube.chat.controller;

import com.nofriend.sonmandube.chat.controller.request.ChatRequest;
<<<<<<< HEAD
import com.nofriend.sonmandube.chat.controller.response.ChatResponse;
import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.ChatProjection;
import com.nofriend.sonmandube.chat.repository.ChatRepository;
import com.nofriend.sonmandube.exception.IdNotFoundException;
=======
import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.ChatProjection;
import com.nofriend.sonmandube.chat.repository.ChatRepository;
>>>>>>> 723abc5 (feat: add spring security chatting)
import com.nofriend.sonmandube.handwriting.domain.HandwritingNameDownloadUrlProjection;
import com.nofriend.sonmandube.handwriting.repository.HandwritingRepository;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
<<<<<<< HEAD
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.access.prepost.PreAuthorize;
=======
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.security.core.Authentication;
>>>>>>> 723abc5 (feat: add spring security chatting)
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

<<<<<<< HEAD
import java.security.Principal;
import java.util.List;
import java.util.Optional;
=======
import java.util.List;
>>>>>>> 723abc5 (feat: add spring security chatting)

@Controller
@RequiredArgsConstructor
@Slf4j
public class ChatController {
    private final MemberRepository memberRepository;
    private final HandwritingRepository handwritingRepository;
    private final ChatRepository chatRepository;
<<<<<<< HEAD

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
=======
    private final JwtProvider jwtProvider;


    @MessageMapping("/sonmandu")
    @SendTo("/topic/sonmandu")
    public Chat chatting(@Valid ChatRequest chatRequest, @Header("Authorization") String token) {

        token = token.substring(7);

        Long memberId = Long.valueOf(jwtProvider.getAuthentication(token).getName());

        String memberNickname = memberRepository.findNicknameByMemberId(memberId).getNickname();

        HandwritingNameDownloadUrlProjection handwritingNameDownloadUrlProjection = handwritingRepository.findNameDownloadUrlByHandwritingId(chatRequest.getHandwritingId());

        Chat newChat = chatRequest.toEntity(
                memberId,
                memberNickname,
>>>>>>> 723abc5 (feat: add spring security chatting)
                chatRequest.getHandwritingId(),
                handwritingNameDownloadUrlProjection.getName(),
                handwritingNameDownloadUrlProjection.getDownloadUrl(),
                chatRequest.getMessage()
        );

<<<<<<< HEAD
<<<<<<< HEAD
        System.out.println(newChat.toString());
        chatRepository.save(newChat);
        System.out.println(newChat.toString());

        return newChat.toChatResponse();
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/chat")
    @ResponseBody
    public List<ChatProjection> getChat(){
        return chatRepository.findTop10ByOrderByChatIdDesc();
=======
//        log.info("newChat: " + newChat.toString());
=======
>>>>>>> a88b847 (teat: wss)
        chatRepository.save(newChat);
        log.info("send message: " + newChat.getMessage() + ", pub: " + newChat.getMember().getMemberId() );

        return newChat;
    }

    @GetMapping("/chat")
    @ResponseBody
    public List<ChatProjection> getChat(){
        return chatRepository.findTop20ByOrderByChatIdDesc();
>>>>>>> 723abc5 (feat: add spring security chatting)
    }

}