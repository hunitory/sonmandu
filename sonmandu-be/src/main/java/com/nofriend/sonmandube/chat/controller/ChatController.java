package com.nofriend.sonmandube.chat.controller;

import com.nofriend.sonmandube.chat.controller.request.ChatRequest;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9809c16 (feat: chatting)
import com.nofriend.sonmandube.chat.controller.response.ChatResponse;
import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.ChatProjection;
import com.nofriend.sonmandube.chat.repository.ChatRepository;
<<<<<<< HEAD
<<<<<<< HEAD
import com.nofriend.sonmandube.exception.IdNotFoundException;
<<<<<<< HEAD
=======
import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.ChatProjection;
import com.nofriend.sonmandube.chat.repository.ChatRepository;
>>>>>>> 723abc5 (feat: add spring security chatting)
=======
>>>>>>> e3c4175 (test: chatting principal)
=======
>>>>>>> 9809c16 (feat: chatting)
=======
import com.nofriend.sonmandube.exception.IdNotFoundException;
>>>>>>> 5ea57fa (feat: add chat member)
import com.nofriend.sonmandube.handwriting.domain.HandwritingNameDownloadUrlProjection;
import com.nofriend.sonmandube.handwriting.repository.HandwritingRepository;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
<<<<<<< HEAD
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
=======
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.access.prepost.PreAuthorize;
>>>>>>> 7344e92 (test: chatting principal)
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7587597 (fix: spring security websocket)
import java.security.Principal;
import java.util.List;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import java.util.Optional;
=======
import java.util.List;
>>>>>>> 723abc5 (feat: add spring security chatting)
=======
import java.util.Objects;
>>>>>>> e68a7a3 (fix: chatting principal)
=======
>>>>>>> 03bb9db (test: chatting principal)
=======
import java.util.Optional;
>>>>>>> 5ea57fa (feat: add chat member)

@Controller
@RequiredArgsConstructor
@Slf4j
public class ChatController {
    private final MemberRepository memberRepository;
    private final HandwritingRepository handwritingRepository;
    private final ChatRepository chatRepository;
<<<<<<< HEAD
<<<<<<< HEAD

    @MessageMapping("/sonmandu")
    @SendTo("/topic/sonmandu")
    public ChatResponse chatting(Principal principal, @Valid ChatRequest chatRequest) {
        Long memberId = Long.valueOf(principal.getName());

        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IdNotFoundException("해당하는 회원이 없습니다."));
<<<<<<< HEAD

        HandwritingNameDownloadUrlProjection handwritingNameDownloadUrlProjection = handwritingRepository.findNameDownloadUrlByHandwritingId(chatRequest.getHandwritingId());

        Chat newChat = chatRequest.toEntity(
                memberId,
                member.getNickname(),
                member.isBadge(),
                member.getImageUrl(),
<<<<<<< HEAD
=======
    private final JwtProvider jwtProvider;


    @MessageMapping("/sonmandu")
    @SendTo("/topic/sonmandu")
    public ChatProjection chatting(Principal principal, @Valid ChatRequest chatRequest) {
    log.info("chatting1");
<<<<<<< HEAD
=======
//    token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOSIsImF1dGgiOiJST0xFX1VTRVIiLCJtZW1iZXJJZCI6MjksImV4cCI6MTcwNzk2MjQ3OX0.6TMBRyhHLNEnQK7IhG0YCQ49OI58v8SbJHl0amGvKoHlIQ3qYlrYVYc9Z_dJpqETDWQLs_luE71DedVeBt_xsg";;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 32d7084 (feat: change dateTime)
        token = token.substring(7);

<<<<<<< HEAD
//        Long memberId = Long.valueOf(jwtProvider.getAuthentication(token).getName());
    Long memberId = 1L;
    chatRequest.setHandwritingId(1L);
    chatRequest.setMessage("fsdf");
=======
=======

>>>>>>> 7587597 (fix: spring security websocket)
//        token = token.substring(7);
//
//        Long memberId = Long.valueOf(jwtProvider.getAuthentication(token).getName());
=======
>>>>>>> 25c114c (test: chatting principal)
        Long memberId = Long.valueOf(principal.getName());
        log.info(String.valueOf(memberId));
>>>>>>> 5ff7c3c (refactor: chatting websocket)
=======

    @MessageMapping("/sonmandu")
    @SendTo("/topic/sonmandu")
    public ChatResponse chatting(Principal principal, @Valid ChatRequest chatRequest) {
        Long memberId = Long.valueOf(principal.getName());

>>>>>>> 9809c16 (feat: chatting)
        String memberNickname = memberRepository.findNicknameByMemberId(memberId).getNickname();
=======
>>>>>>> 5ea57fa (feat: add chat member)

        HandwritingNameDownloadUrlProjection handwritingNameDownloadUrlProjection = handwritingRepository.findNameDownloadUrlByHandwritingId(chatRequest.getHandwritingId());

        Chat newChat = chatRequest.toEntity(
                memberId,
<<<<<<< HEAD
                memberNickname,
>>>>>>> 723abc5 (feat: add spring security chatting)
=======
                member.getNickname(),
                member.isBadge(),
>>>>>>> 5ea57fa (feat: add chat member)
=======
>>>>>>> dd08f31 (feat: add member image url in chat)
                chatRequest.getHandwritingId(),
<<<<<<< HEAD
"1","!'",
//                handwritingNameDownloadUrlProjection.getName(),
//                handwritingNameDownloadUrlProjection.getDownloadUrl(),
=======
                handwritingNameDownloadUrlProjection.getName(),
                handwritingNameDownloadUrlProjection.getDownloadUrl(),
>>>>>>> 25c114c (test: chatting principal)
                chatRequest.getMessage()
        );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        System.out.println(newChat.toString());
        chatRepository.save(newChat);
<<<<<<< HEAD
        System.out.println(newChat.toString());
=======
//        chatRepository.save(newChat);
=======
        chatRepository.save(newChat);
>>>>>>> 927096d (feat: change dateTime)
=======

<<<<<<< HEAD
>>>>>>> 25c114c (test: chatting principal)
        log.info("send message: " + newChat.getMessage() + ", pub: " + newChat.getMember().getMemberId() );
>>>>>>> 738ebf3 (feat: change JwtFilter Exception Message)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return newChat.toChatResponse();
=======
        return (ChatProjection)newChat;
>>>>>>> 25c114c (test: chatting principal)
=======
        return (ChatProjection) chatRepository.findById(newChat.getChatId())
=======
        return chatRepository.findByChatId(newChat.getChatId())
>>>>>>> ba1bbfd (test: chatting principal)
                .orElseThrow(() -> new IdNotFoundException("해당하는 채딩이 없습니다."));
>>>>>>> e3c4175 (test: chatting principal)
=======
        return newChat.toChatResponse();
>>>>>>> 9809c16 (feat: chatting)
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