package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HandwritingApplicationRepository extends JpaRepository<HandwritingApplication, Long> {
    List<HandwritingApplication> findAllByMemberMemberId(Long memberId);
}
