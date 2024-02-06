package com.nofriend.sonmandube.handwritingstory.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwritingStoryComment is a Querydsl query type for HandwritingStoryComment
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwritingStoryComment extends EntityPathBase<HandwritingStoryComment> {

    private static final long serialVersionUID = -344826717L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwritingStoryComment handwritingStoryComment = new QHandwritingStoryComment("handwritingStoryComment");

    public final StringPath content = createString("content");

    public final DateTimePath<java.time.LocalDateTime> createDate = createDateTime("createDate", java.time.LocalDateTime.class);

    public final QHandwritingStory handwritingStory;

    public final NumberPath<Long> handwritingStoryCommentId = createNumber("handwritingStoryCommentId", Long.class);

    public final com.nofriend.sonmandube.member.domain.QMember member;

    public QHandwritingStoryComment(String variable) {
        this(HandwritingStoryComment.class, forVariable(variable), INITS);
    }

    public QHandwritingStoryComment(Path<? extends HandwritingStoryComment> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwritingStoryComment(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwritingStoryComment(PathMetadata metadata, PathInits inits) {
        this(HandwritingStoryComment.class, metadata, inits);
    }

    public QHandwritingStoryComment(Class<? extends HandwritingStoryComment> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwritingStory = inits.isInitialized("handwritingStory") ? new QHandwritingStory(forProperty("handwritingStory"), inits.get("handwritingStory")) : null;
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
    }

}

