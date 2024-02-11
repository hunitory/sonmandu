package com.nofriend.sonmandube.chat.repository;

import com.nofriend.sonmandube.chat.domain.Chat;
import com.nofriend.sonmandube.chat.domain.ChatProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Long> {
    List<ChatProjection> findTop20ByOrderByChatIdDesc();
    Optional<ChatProjection> findByChatId(Long chatId);

}
