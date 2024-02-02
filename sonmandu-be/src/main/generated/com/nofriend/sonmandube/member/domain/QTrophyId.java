package com.nofriend.sonmandube.member.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QTrophyId is a Querydsl query type for TrophyId
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QTrophyId extends BeanPath<TrophyId> {

    private static final long serialVersionUID = -496632527L;

    public static final QTrophyId trophyId = new QTrophyId("trophyId");

<<<<<<< HEAD
    public final DateTimePath<java.time.LocalDateTime> createDate = createDateTime("createDate", java.time.LocalDateTime.class);
=======
    public final StringPath createDate = createString("createDate");
>>>>>>> e8fb302 (feat: findByMemeberInformation, show tropy info)

    public final NumberPath<Integer> weight = createNumber("weight", Integer.class);

    public QTrophyId(String variable) {
        super(TrophyId.class, forVariable(variable));
    }

    public QTrophyId(Path<? extends TrophyId> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTrophyId(PathMetadata metadata) {
        super(TrophyId.class, metadata);
    }

}

