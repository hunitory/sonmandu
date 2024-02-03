package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HandwritingRepository extends JpaRepository<Handwriting, Long>, HandwritingRepositoryCustom {

    List<Handwriting> findAllByHandwritingApplicationMemberMemberId(Long memberId);

    List<Handwriting> findTop3ByOrderByLastMonthDescCreateDateDesc();

    List<Handwriting> findTop5ByOrderByLastWeekDescCreateDateDesc();

    List<Handwriting> findTop10ByOrderByLastWeekDescCreateDateDesc();
}
