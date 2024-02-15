package com.nofriend.sonmandube.handwriting.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwritingHit is a Querydsl query type for HandwritingHit
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwritingHit extends EntityPathBase<HandwritingHit> {

    private static final long serialVersionUID = 1348223647L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwritingHit handwritingHit = new QHandwritingHit("handwritingHit");

    public final QHandwriting handwriting;

    public final QHandwritingCountId handwritingHitId;

    public final com.nofriend.sonmandube.member.domain.QMember member;

    public QHandwritingHit(String variable) {
        this(HandwritingHit.class, forVariable(variable), INITS);
    }

    public QHandwritingHit(Path<? extends HandwritingHit> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwritingHit(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwritingHit(PathMetadata metadata, PathInits inits) {
        this(HandwritingHit.class, metadata, inits);
    }

    public QHandwritingHit(Class<? extends HandwritingHit> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwriting = inits.isInitialized("handwriting") ? new QHandwriting(forProperty("handwriting"), inits.get("handwriting")) : null;
        this.handwritingHitId = inits.isInitialized("handwritingHitId") ? new QHandwritingCountId(forProperty("handwritingHitId")) : null;
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
    }

}

