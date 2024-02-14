package com.nofriend.sonmandube.handwritingstory.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwritingStory is a Querydsl query type for HandwritingStory
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwritingStory extends EntityPathBase<HandwritingStory> {

    private static final long serialVersionUID = 1683804700L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwritingStory handwritingStory = new QHandwritingStory("handwritingStory");

    public final ListPath<HandwritingStoryComment, QHandwritingStoryComment> commentList = this.<HandwritingStoryComment, QHandwritingStoryComment>createList("commentList", HandwritingStoryComment.class, QHandwritingStoryComment.class, PathInits.DIRECT2);

    public final StringPath content = createString("content");

    public final DateTimePath<java.time.LocalDateTime> createDate = createDateTime("createDate", java.time.LocalDateTime.class);

    public final com.nofriend.sonmandube.handwriting.domain.QHandwriting handwriting;

    public final ListPath<HandwritingStoryHit, QHandwritingStoryHit> handwritingStoryHits = this.<HandwritingStoryHit, QHandwritingStoryHit>createList("handwritingStoryHits", HandwritingStoryHit.class, QHandwritingStoryHit.class, PathInits.DIRECT2);

    public final NumberPath<Long> handwritingStoryId = createNumber("handwritingStoryId", Long.class);

    public final ListPath<HandwritingStoryLike, QHandwritingStoryLike> handwritingStoryLikes = this.<HandwritingStoryLike, QHandwritingStoryLike>createList("handwritingStoryLikes", HandwritingStoryLike.class, QHandwritingStoryLike.class, PathInits.DIRECT2);

    public final NumberPath<Integer> hitCount = createNumber("hitCount", Integer.class);

    public final NumberPath<Integer> likeCount = createNumber("likeCount", Integer.class);

    public final com.nofriend.sonmandube.member.domain.QMember member;

    public final StringPath thumbnail = createString("thumbnail");

    public final StringPath title = createString("title");

    public final NumberPath<Integer> weight = createNumber("weight", Integer.class);

    public QHandwritingStory(String variable) {
        this(HandwritingStory.class, forVariable(variable), INITS);
    }

    public QHandwritingStory(Path<? extends HandwritingStory> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwritingStory(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwritingStory(PathMetadata metadata, PathInits inits) {
        this(HandwritingStory.class, metadata, inits);
    }

    public QHandwritingStory(Class<? extends HandwritingStory> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwriting = inits.isInitialized("handwriting") ? new com.nofriend.sonmandube.handwriting.domain.QHandwriting(forProperty("handwriting"), inits.get("handwriting")) : null;
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
    }

}

