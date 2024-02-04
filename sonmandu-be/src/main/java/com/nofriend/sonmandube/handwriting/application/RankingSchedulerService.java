package com.nofriend.sonmandube.handwriting.application;

import com.nofriend.sonmandube.handwriting.repository.HandwritingRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;


@Service
@RequiredArgsConstructor
public class RankingSchedulerService {

    private final HandwritingRepository handwritingRepository;

    @Scheduled(cron = "0 0 0 * * 0 ") // 매주 일요일 자정에 실행
    @Transactional
    public void weekRankingUpdate() {
        LocalDate now = LocalDate.now();
        handwritingRepository.addThisWeekToThisMonth(); // 이번 주 가중치 이번 달 가중치에 합산
        handwritingRepository.setThisWeekToLastWeek(); // 이번 주 가중치 업데이트

        int lastDay = now.withDayOfMonth(now.lengthOfMonth()).getDayOfMonth(); // 현재 달의 마지막 일
        if(now.getDayOfMonth() == lastDay) { // 달의 마지막 일자면
            handwritingRepository.setThisMonthToLastMonth(); // 이번 달 가중치 지난 달 가중치로 업데이트
        }
    }
}
