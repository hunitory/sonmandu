package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.controller.request.SearchConditionRequest;
import com.nofriend.sonmandube.handwriting.domain.*;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class HandwritingRepositoryImpl implements HandwritingRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    /*
    query dsl을 사용하여 동적 검색 구현
     */
    @Override
    public List<Handwriting> findByDynamicConditions(int start, int count, SearchConditionRequest condition) {
        BooleanBuilder builder = new BooleanBuilder();

        QHandwriting handwriting = QHandwriting.handwriting;
        if(condition.getName() != null && !condition.getName().equals("")) {
            builder.and(handwriting.name.containsIgnoreCase(condition.getName()));
        }
        if(condition.getTagIdList() != null && !condition.getTagIdList().isEmpty()) {
            List<Integer> tagIds = condition.getTagIdList();
            QHandwritingTag handwritingTag = QHandwritingTag.handwritingTag;

            // handwritingTag에서 tag를 포함하고 tag개수를 만족하는 handwritingApplicationId를 조회
            List<Long> handwritingApplicationIds = jpaQueryFactory.select(handwritingTag.handwritingTagId.handwritingApplicationId)
                    .from(handwritingTag)
                    .where(handwritingTag.handwritingTagId.tagId.in(tagIds))
<<<<<<< HEAD
//                    .groupBy(handwritingTag.handwritingTagId.handwritingApplicationId)
//                    .having(handwritingTag.handwritingTagId.handwritingApplicationId.count().goe((long) tagIds.size()))
=======
                    .groupBy(handwritingTag.handwritingTagId.handwritingApplicationId)
                    .having(handwritingTag.handwritingTagId.handwritingApplicationId.count().goe((long) tagIds.size()))
>>>>>>> 4e5601b (fix: 손글씨 전시관 검색 파라미터 tagId 변경)
                    .fetch();
            System.out.println(handwritingApplicationIds.size());

            // handwritingApplicationId를 사용하여 Handwriting 조회.
            builder.and(handwriting.handwritingApplication.handwritingApplicationId.in(handwritingApplicationIds));
        }

        List<Handwriting> result = jpaQueryFactory.selectFrom(handwriting)
                .where(builder)
                .offset(start)
                .limit(count)
                .orderBy(sortCondition(condition.getSort()))
                .fetch();
        System.out.println(result.size());
        return result;
    }


    /*
    정렬 방식에 따른 쿼리 생성
     */
    private OrderSpecifier[] sortCondition(String sort) {
        List<OrderSpecifier> orderSpecifiers = new ArrayList<>();
        switch (sort) {
            case "download":
                orderSpecifiers.add(new OrderSpecifier(Order.DESC, QHandwriting.handwriting.downloadCount));
//                return new OrderSpecifier<>(Order.DESC, QHandwriting.handwriting.downloadCount);
            case "hit":
                orderSpecifiers.add(new OrderSpecifier(Order.DESC, QHandwriting.handwriting.hitCount));
//                return new OrderSpecifier<>(Order.DESC, QHandwriting.handwriting.hitCount);
            case "likes":
                orderSpecifiers.add(new OrderSpecifier(Order.DESC, QHandwriting.handwriting.likeCount));
//                return new OrderSpecifier<>(Order.DESC, QHandwriting.handwriting.likeCount);
            case "popular":
                orderSpecifiers.add(new OrderSpecifier(Order.DESC, QHandwriting.handwriting.lastMonth));
//                return new OrderSpecifier<>(Order.DESC, QHandwriting.handwriting.lastMonth);
            case "desc": default:
                orderSpecifiers.add(new OrderSpecifier(Order.DESC, QHandwriting.handwriting.createDate));
//                return new OrderSpecifier<>(Order.DESC, QHandwriting.handwriting.createDate);
        }

        orderSpecifiers.add(new OrderSpecifier(Order.DESC, QHandwriting.handwriting.handwritingId));
        return orderSpecifiers.toArray(new OrderSpecifier[orderSpecifiers.size()]);
    }
}
