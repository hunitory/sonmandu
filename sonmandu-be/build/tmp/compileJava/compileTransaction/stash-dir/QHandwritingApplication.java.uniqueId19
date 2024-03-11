package com.nofriend.sonmandube.handwriting.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwritingApplication is a Querydsl query type for HandwritingApplication
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwritingApplication extends EntityPathBase<HandwritingApplication> {

    private static final long serialVersionUID = 1846863964L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwritingApplication handwritingApplication = new QHandwritingApplication("handwritingApplication");

    public final DatePath<java.time.LocalDate> createDate = createDate("createDate", java.time.LocalDate.class);

    public final NumberPath<Long> handwritingApplicationId = createNumber("handwritingApplicationId", Long.class);

    public final ListPath<HandwritingTag, QHandwritingTag> handwritingTagList = this.<HandwritingTag, QHandwritingTag>createList("handwritingTagList", HandwritingTag.class, QHandwritingTag.class, PathInits.DIRECT2);

    public final StringPath imageUrl = createString("imageUrl");

    public final com.nofriend.sonmandube.member.domain.QMember member;

    public final StringPath name = createString("name");

    public final NumberPath<Integer> state = createNumber("state", Integer.class);

    public QHandwritingApplication(String variable) {
        this(HandwritingApplication.class, forVariable(variable), INITS);
    }

    public QHandwritingApplication(Path<? extends HandwritingApplication> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwritingApplication(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwritingApplication(PathMetadata metadata, PathInits inits) {
        this(HandwritingApplication.class, metadata, inits);
    }

    public QHandwritingApplication(Class<? extends HandwritingApplication> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
    }

}

