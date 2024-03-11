package com.nofriend.sonmandube.handwriting.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwritingLike is a Querydsl query type for HandwritingLike
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwritingLike extends EntityPathBase<HandwritingLike> {

    private static final long serialVersionUID = -1154620917L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwritingLike handwritingLike = new QHandwritingLike("handwritingLike");

    public final QHandwriting handwriting;

    public final QHandwritingCountId handwritingLikeId;

    public final com.nofriend.sonmandube.member.domain.QMember member;

    public QHandwritingLike(String variable) {
        this(HandwritingLike.class, forVariable(variable), INITS);
    }

    public QHandwritingLike(Path<? extends HandwritingLike> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwritingLike(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwritingLike(PathMetadata metadata, PathInits inits) {
        this(HandwritingLike.class, metadata, inits);
    }

    public QHandwritingLike(Class<? extends HandwritingLike> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwriting = inits.isInitialized("handwriting") ? new QHandwriting(forProperty("handwriting"), inits.get("handwriting")) : null;
        this.handwritingLikeId = inits.isInitialized("handwritingLikeId") ? new QHandwritingCountId(forProperty("handwritingLikeId")) : null;
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
    }

}

