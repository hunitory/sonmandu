package com.nofriend.sonmandube.handwritingstory.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwritingStoryLike is a Querydsl query type for HandwritingStoryLike
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwritingStoryLike extends EntityPathBase<HandwritingStoryLike> {

    private static final long serialVersionUID = 1733461971L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwritingStoryLike handwritingStoryLike = new QHandwritingStoryLike("handwritingStoryLike");

    public final QHandwritingStory handwritingStory;

    public final QHandwritingStoryCountId handwritingStoryLikeId;

    public final com.nofriend.sonmandube.member.domain.QMember member;

    public QHandwritingStoryLike(String variable) {
        this(HandwritingStoryLike.class, forVariable(variable), INITS);
    }

    public QHandwritingStoryLike(Path<? extends HandwritingStoryLike> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwritingStoryLike(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwritingStoryLike(PathMetadata metadata, PathInits inits) {
        this(HandwritingStoryLike.class, metadata, inits);
    }

    public QHandwritingStoryLike(Class<? extends HandwritingStoryLike> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwritingStory = inits.isInitialized("handwritingStory") ? new QHandwritingStory(forProperty("handwritingStory"), inits.get("handwritingStory")) : null;
        this.handwritingStoryLikeId = inits.isInitialized("handwritingStoryLikeId") ? new QHandwritingStoryCountId(forProperty("handwritingStoryLikeId")) : null;
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
    }

}

