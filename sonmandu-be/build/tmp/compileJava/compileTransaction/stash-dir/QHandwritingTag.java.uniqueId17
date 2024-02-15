package com.nofriend.sonmandube.handwriting.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwritingTag is a Querydsl query type for HandwritingTag
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwritingTag extends EntityPathBase<HandwritingTag> {

    private static final long serialVersionUID = 1348234918L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwritingTag handwritingTag = new QHandwritingTag("handwritingTag");

    public final QHandwritingApplication handwritingApplication;

    public final QHandwritingTagId handwritingTagId;

    public QHandwritingTag(String variable) {
        this(HandwritingTag.class, forVariable(variable), INITS);
    }

    public QHandwritingTag(Path<? extends HandwritingTag> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwritingTag(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwritingTag(PathMetadata metadata, PathInits inits) {
        this(HandwritingTag.class, metadata, inits);
    }

    public QHandwritingTag(Class<? extends HandwritingTag> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwritingApplication = inits.isInitialized("handwritingApplication") ? new QHandwritingApplication(forProperty("handwritingApplication"), inits.get("handwritingApplication")) : null;
        this.handwritingTagId = inits.isInitialized("handwritingTagId") ? new QHandwritingTagId(forProperty("handwritingTagId")) : null;
    }

}

