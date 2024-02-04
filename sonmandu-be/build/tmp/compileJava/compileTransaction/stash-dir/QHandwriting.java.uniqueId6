package com.nofriend.sonmandube.handwriting.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHandwriting is a Querydsl query type for Handwriting
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHandwriting extends EntityPathBase<Handwriting> {

    private static final long serialVersionUID = 1286473812L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHandwriting handwriting = new QHandwriting("handwriting");

    public final DateTimePath<java.time.LocalDateTime> createDate = createDateTime("createDate", java.time.LocalDateTime.class);

    public final NumberPath<Integer> downloadCount = createNumber("downloadCount", Integer.class);

    public final StringPath downloadUrl = createString("downloadUrl");

    public final QHandwritingApplication handwritingApplication;

    public final NumberPath<Long> handwritingId = createNumber("handwritingId", Long.class);

    public final NumberPath<Integer> hitCount = createNumber("hitCount", Integer.class);

    public final BooleanPath isSelected = createBoolean("isSelected");

    public final NumberPath<Integer> lastMonth = createNumber("lastMonth", Integer.class);

    public final NumberPath<Integer> lastWeek = createNumber("lastWeek", Integer.class);

    public final NumberPath<Integer> likeCount = createNumber("likeCount", Integer.class);

    public final StringPath name = createString("name");

    public final NumberPath<Integer> thisMonth = createNumber("thisMonth", Integer.class);

    public final NumberPath<Integer> thisWeek = createNumber("thisWeek", Integer.class);

    public QHandwriting(String variable) {
        this(Handwriting.class, forVariable(variable), INITS);
    }

    public QHandwriting(Path<? extends Handwriting> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHandwriting(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHandwriting(PathMetadata metadata, PathInits inits) {
        this(Handwriting.class, metadata, inits);
    }

    public QHandwriting(Class<? extends Handwriting> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwritingApplication = inits.isInitialized("handwritingApplication") ? new QHandwritingApplication(forProperty("handwritingApplication"), inits.get("handwritingApplication")) : null;
    }

}

