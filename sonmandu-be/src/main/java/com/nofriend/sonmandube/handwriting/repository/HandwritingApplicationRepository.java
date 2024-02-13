package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HandwritingApplicationRepository extends JpaRepository<HandwritingApplication, Long> {
    List<HandwritingApplication> findAllByMemberMemberId(Long memberId);

    List<HandwritingApplication> findAllByMemberMemberIdOrderByStateAsc(Long memberId);
<<<<<<< HEAD
<<<<<<< HEAD

    Boolean existsByName(String value);
=======
>>>>>>> 19c7009 (feat: add state filter)
=======

    Boolean existsByName(String value);
>>>>>>> 341ad76 (feat: add check unique handwriting name)
}
