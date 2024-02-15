package com.nofriend.sonmandube.handwritingstory.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QHandwritingStoryCountId is a Querydsl query type for HandwritingStoryCountId
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QHandwritingStoryCountId extends BeanPath<HandwritingStoryCountId> {

    private static final long serialVersionUID = -337395506L;

    public static final QHandwritingStoryCountId handwritingStoryCountId = new QHandwritingStoryCountId("handwritingStoryCountId");

    public final NumberPath<Long> handwritingStoryId = createNumber("handwritingStoryId", Long.class);

    public final NumberPath<Long> memberId = createNumber("memberId", Long.class);

    public QHandwritingStoryCountId(String variable) {
        super(HandwritingStoryCountId.class, forVariable(variable));
    }

    public QHandwritingStoryCountId(Path<? extends HandwritingStoryCountId> path) {
        super(path.getType(), path.getMetadata());
    }

    public QHandwritingStoryCountId(PathMetadata metadata) {
        super(HandwritingStoryCountId.class, metadata);
    }

}

