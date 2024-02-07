package com.nofriend.sonmandube.member.repository;

import com.nofriend.sonmandube.member.domain.EmailToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailTokenRepository extends JpaRepository<EmailToken, Long> {
}
