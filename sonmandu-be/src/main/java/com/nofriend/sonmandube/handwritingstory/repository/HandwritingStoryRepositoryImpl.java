package com.nofriend.sonmandube.handwritingstory.repository;

import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.QHandwriting;
import com.nofriend.sonmandube.handwriting.domain.QHandwritingTag;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStory;
import com.nofriend.sonmandube.handwritingstory.domain.QHandwritingStory;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class HandwritingStoryRepositoryImpl implements HandwritingStoryRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    /*
    query dsl을 사용하여 동적 검색 구현
     */
    @Override
    public List<HandwritingStory> findByDynamicConditions(int start, int count, SearchConditionRequest condition) {
        BooleanBuilder builder = new BooleanBuilder();

        QHandwritingStory handwritingStory = QHandwritingStory.handwritingStory;
        if(condition.getTitle() != null && !condition.getTitle().equals("")) {
            builder.and(handwritingStory.title.containsIgnoreCase(condition.getTitle()));
        }
        if(condition.getName() != null && !condition.getName().equals("")) {
            builder.and(handwritingStory.handwriting.name.containsIgnoreCase(condition.getName()));
        }

        List<HandwritingStory> result = jpaQueryFactory.selectFrom(handwritingStory)
                .where(builder)
                .offset(start)
                .limit(count)
                .orderBy(sortCondition(condition.getSort()))
                .fetch();

        return result;
    }


    /*
    정렬 방식에 따른 쿼리 생성
     */
    private OrderSpecifier<?> sortCondition(String sort) {
        if(sort == null){
            sort = "default";
        }
        switch (sort) {
            case "hit":
                return new OrderSpecifier<>(Order.DESC, QHandwritingStory.handwritingStory.hitCount);
            case "likes":
                return new OrderSpecifier<>(Order.DESC, QHandwritingStory.handwritingStory.likeCount);
            case "popular":
                return new OrderSpecifier<>(Order.DESC, QHandwritingStory.handwritingStory.weight);
            case "desc": default:
                return new OrderSpecifier<>(Order.DESC, QHandwritingStory.handwritingStory.createDate);
        }
    }
}
