package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import com.nofriend.sonmandube.handwriting.domain.HandwritingNameDownloadUrlProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1c41759 (fix: status 500)

    Optional<Handwriting> findByHandwritingApplicationHandwritingApplicationIdAndIsSelected(Long handwritingApplicationId, boolean i);

    List<Handwriting> findAllByHandwritingApplicationMemberMemberIdAndIsSelected(Long memberId, boolean b);
<<<<<<< HEAD
<<<<<<< HEAD

    List<Handwriting> findAllByHandwritingApplicationMemberMemberIdAndIsSelectedAndHandwritingApplicationStateGreaterThanEqual(Long targetId, boolean b, int i);

    Optional<Handwriting> findByHandwritingApplicationHandwritingApplicationId(Long handwritingApplicationId);
=======
>>>>>>> 723abc5 (feat: add spring security chatting)
=======
>>>>>>> 1c41759 (fix: status 500)
=======

    List<Handwriting> findAllByHandwritingApplicationMemberMemberIdAndIsSelectedAndHandwritingApplicationStateGreaterThanEqual(Long targetId, boolean b, int i);
>>>>>>> 19c7009 (feat: add state filter)
}
