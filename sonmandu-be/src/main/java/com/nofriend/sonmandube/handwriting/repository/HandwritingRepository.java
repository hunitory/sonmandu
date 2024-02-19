package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import com.nofriend.sonmandube.handwriting.domain.HandwritingNameDownloadUrlProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface HandwritingRepository extends JpaRepository<Handwriting, Long>, HandwritingRepositoryCustom {

    List<Handwriting> findAllByHandwritingApplicationMemberMemberId(Long memberId);

    List<Handwriting> findTop3ByOrderByLastMonthDescCreateDateDesc();

    List<Handwriting> findTop5ByOrderByLastWeekDescCreateDateDesc();

    List<Handwriting> findTop10ByOrderByLastWeekDescCreateDateDesc();

    @Modifying
    @Query(value = "update handwriting set last_week = this_week, this_week = 0",
            nativeQuery = true)
    void setThisWeekToLastWeek();

    @Modifying
    @Query(value = "update handwriting set last_month = this_month, this_month = 0",
            nativeQuery = true)
    void setThisMonthToLastMonth();

    @Modifying
    @Query(value = "update handwriting set this_month = this_month + this_week",
            nativeQuery = true)
    void addThisWeekToThisMonth();

    HandwritingNameDownloadUrlProjection findNameDownloadUrlByHandwritingId(Long handwritingId);

    List<Handwriting> findAllByHandwritingApplicationMemberMemberIdAndIsSelectedAndHandwritingApplicationStateGreaterThanEqual(Long targetId, boolean b, int i);

    Optional<Handwriting> findByHandwritingApplicationHandwritingApplicationId(Long handwritingApplicationId);

    Optional<Handwriting> findByHandwritingApplicationHandwritingApplicationIdAndIsSelected(Long handwritingApplicationId, boolean b);
}
