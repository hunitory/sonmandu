package com.nofriend.sonmandube.member.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTrophy is a Querydsl query type for Trophy
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTrophy extends EntityPathBase<Trophy> {

    private static final long serialVersionUID = 1881045366L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTrophy trophy = new QTrophy("trophy");

    public final QMember member;

    public final QTrophyId trophyId;

    public QTrophy(String variable) {
        this(Trophy.class, forVariable(variable), INITS);
    }

    public QTrophy(Path<? extends Trophy> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTrophy(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTrophy(PathMetadata metadata, PathInits inits) {
        this(Trophy.class, metadata, inits);
    }

    public QTrophy(Class<? extends Trophy> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.member = inits.isInitialized("member") ? new QMember(forProperty("member")) : null;
        this.trophyId = inits.isInitialized("trophyId") ? new QTrophyId(forProperty("trophyId")) : null;
    }

}

