package com.nofriend.sonmandube.handwritingstory.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwritingStoryHit is a Querydsl query type for HandwritingStoryHit
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwritingStoryHit extends EntityPathBase<HandwritingStoryHit> {

    private static final long serialVersionUID = 1302840279L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwritingStoryHit handwritingStoryHit = new QHandwritingStoryHit("handwritingStoryHit");

    public final QHandwritingStory handwritingStory;

    public final QHandwritingStoryCountId handwritingStoryHitId;

    public final com.nofriend.sonmandube.member.domain.QMember member;

    public QHandwritingStoryHit(String variable) {
        this(HandwritingStoryHit.class, forVariable(variable), INITS);
    }

    public QHandwritingStoryHit(Path<? extends HandwritingStoryHit> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwritingStoryHit(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwritingStoryHit(PathMetadata metadata, PathInits inits) {
        this(HandwritingStoryHit.class, metadata, inits);
    }

    public QHandwritingStoryHit(Class<? extends HandwritingStoryHit> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwritingStory = inits.isInitialized("handwritingStory") ? new QHandwritingStory(forProperty("handwritingStory"), inits.get("handwritingStory")) : null;
        this.handwritingStoryHitId = inits.isInitialized("handwritingStoryHitId") ? new QHandwritingStoryCountId(forProperty("handwritingStoryHitId")) : null;
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
    }

}

