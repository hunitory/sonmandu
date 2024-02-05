package com.nofriend.sonmandube.chat.controller;

import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.Greeting;
import com.nofriend.sonmandube.chat.domain.HelloMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
@Slf4j
public class GreetingController {

    @MessageMapping("/sonmandu")
    @SendTo("/topic/sonmandu")
    public Chat greeting(Chat chat) throws Exception {
//        Thread.sleep(1000); // simulated delay

        log.info(chat.toString());
        return chat;
    }

}