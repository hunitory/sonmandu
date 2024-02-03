package com.nofriend.sonmandube;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class SonmanduBeApplication {

    public static void main(String[] args) {
        SpringApplication.run(SonmanduBeApplication.class, args);
    }

}
