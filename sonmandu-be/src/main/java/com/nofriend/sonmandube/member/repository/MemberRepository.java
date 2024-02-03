package com.nofriend.sonmandube.member.repository;

import com.nofriend.sonmandube.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findById(String username);

    Optional<Member> findByEmailAndName(String email, String name);

    Optional<Member> findByEmailAndNameAndId(String email, String name, String id);

    Boolean existsById(String id);

    Boolean existsByNickname(String nickname);
}
