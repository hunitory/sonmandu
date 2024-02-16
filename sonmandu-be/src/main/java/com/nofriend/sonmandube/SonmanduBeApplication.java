package com.nofriend.sonmandube;

import com.nofriend.sonmandube.handwriting.application.RankingSchedulerService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.TimeZone;

@EnableJpaAuditing
@EnableScheduling
@SpringBootApplication
public class SonmanduBeApplication {
    public static void main(String[] args) {
        SpringApplication.run(SonmanduBeApplication.class, args);
    }

    @PostConstruct
    public void postMain(){
        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));

        System.out.println("현재 시간: " + LocalDateTime.now().format(DateTimeFormatter.ofPattern("MM월 dd일 hh시 mm분 ss초")));
    }

}
