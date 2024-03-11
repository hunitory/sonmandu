package com.nofriend.sonmandube.handwriting.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwritingDownload is a Querydsl query type for HandwritingDownload
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwritingDownload extends EntityPathBase<HandwritingDownload> {

    private static final long serialVersionUID = -510680836L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwritingDownload handwritingDownload = new QHandwritingDownload("handwritingDownload");

    public final QHandwriting handwriting;

    public final QHandwritingCountId handwritingDownloadId;

    public final com.nofriend.sonmandube.member.domain.QMember member;

    public QHandwritingDownload(String variable) {
        this(HandwritingDownload.class, forVariable(variable), INITS);
    }

    public QHandwritingDownload(Path<? extends HandwritingDownload> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwritingDownload(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwritingDownload(PathMetadata metadata, PathInits inits) {
        this(HandwritingDownload.class, metadata, inits);
    }

    public QHandwritingDownload(Class<? extends HandwritingDownload> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwriting = inits.isInitialized("handwriting") ? new QHandwriting(forProperty("handwriting"), inits.get("handwriting")) : null;
        this.handwritingDownloadId = inits.isInitialized("handwritingDownloadId") ? new QHandwritingCountId(forProperty("handwritingDownloadId")) : null;
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
    }

}

