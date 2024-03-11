package com.nofriend.sonmandube.config;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class QuerydslConfig {

    // entity manager를 빈으로 주입, @Autowired 대신 사용
    @PersistenceContext
    private EntityManager entityManager;

    // 프로젝트 전역에서 사용할 수 있도록 빈으로 등록
    @Bean
    public JPAQueryFactory jpaQueryFactory() {
        return new JPAQueryFactory(entityManager);
    }
}
