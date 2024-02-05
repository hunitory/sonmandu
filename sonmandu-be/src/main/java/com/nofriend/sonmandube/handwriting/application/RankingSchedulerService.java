package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.repository.HandwritingRepository;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.domain.Trophy;
import com.nofriend.sonmandube.member.domain.TrophyId;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import com.nofriend.sonmandube.member.repository.TrophyRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class RankingSchedulerService {

    private final HandwritingRepository handwritingRepository;
    private final TrophyRepository trophyRepository;
    private final MemberRepository memberRepository;

    @Scheduled(cron = "0 0 0 * * 0 ") // 매주 일요일 자정에 실행
    @Transactional
    public void weekRankingUpdate() {
        System.out.println();
        LocalDate now = LocalDate.now();
        handwritingRepository.addThisWeekToThisMonth(); // 이번 주 가중치 이번 달 가중치에 합산
        handwritingRepository.setThisWeekToLastWeek(); // 이번 주 가중치 업데이트

        int lastDay = now.withDayOfMonth(now.lengthOfMonth()).getDayOfMonth(); // 현재 달의 마지막 일
        if(now.getDayOfMonth() == lastDay) { // 달의 마지막 일자면
            handwritingRepository.setThisMonthToLastMonth(); // 이번 달 가중치 지난 달 가중치로 업데이트
            // 트로피 수여
            List<Handwriting> top3List = handwritingRepository.findTop3ByOrderByLastMonthDescCreateDateDesc();
            for (int i=1; i<=top3List.size(); i++) {
                Trophy trophy = Trophy.builder()
                        .trophyId(new TrophyId(i))
                        .member(top3List.get(i).getHandwritingApplication().getMember())
                        .build();
                trophyRepository.save(trophy);
            }
        }

        // 배지 수여
        memberRepository.setIsBadgeFalse(); // 기존 배지 철회
        List<Handwriting> top5List = handwritingRepository.findTop5ByOrderByLastWeekDescCreateDateDesc();
        List<Long> memberIds = new ArrayList<>();
        for(int i=0; i<top5List.size(); i++) {
            memberIds.add(top5List.get(i).getHandwritingApplication().getMember().getMemberId());
        }
        memberRepository.updateThisWeekBadge(memberIds); // 배지 수여
    }
}
