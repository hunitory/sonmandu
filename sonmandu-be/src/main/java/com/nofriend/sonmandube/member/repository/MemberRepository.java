package com.nofriend.sonmandube.member.repository;

import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.domain.MemberNicknameProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findById(String username);

    Optional<Member> findByEmailAndName(String email, String name);

    Optional<Member> findByEmailAndNameAndId(String email, String name, String id);

    Boolean existsById(String id);

    Boolean existsByNickname(String nickname);

    @Modifying
    @Query(value = "update member set is_badge = false where is_badge = true",
            nativeQuery = true)
    void setIsBadgeFalse();

    @Modifying
    @Query(value = "update member set is_badge = true where member_id in (:memberIds)",
            nativeQuery = true)
    void updateThisWeekBadge(List<Long> memberIds);

    MemberNicknameProjection findNicknameByMemberId(Long memberId);
}
