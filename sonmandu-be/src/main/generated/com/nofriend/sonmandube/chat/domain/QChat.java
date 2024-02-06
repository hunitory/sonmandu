package com.nofriend.sonmandube.chat.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QChat is a Querydsl query type for Chat
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QChat extends EntityPathBase<Chat> {

    private static final long serialVersionUID = 2037366748L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QChat chat = new QChat("chat");

    public final NumberPath<Long> chatId = createNumber("chatId", Long.class);

<<<<<<< HEAD
<<<<<<< HEAD
    public final StringPath createTime = createString("createTime");

    public final com.nofriend.sonmandube.handwriting.domain.QHandwriting handwriting;

    public final com.nofriend.sonmandube.member.domain.QMember member;

=======
    public final DateTimePath<java.time.LocalDateTime> createTime = createDateTime("createTime", java.time.LocalDateTime.class);

    public final com.nofriend.sonmandube.handwriting.domain.QHandwriting handwriting;

>>>>>>> bb671ba (feat: add WebSocket)
=======
    public final StringPath createTime = createString("createTime");

    public final com.nofriend.sonmandube.handwriting.domain.QHandwriting handwriting;

    public final com.nofriend.sonmandube.member.domain.QMember member;

>>>>>>> 23a865a4 (cfeat: add spring security chatting)
    public final StringPath message = createString("message");

    public QChat(String variable) {
        this(Chat.class, forVariable(variable), INITS);
    }

    public QChat(Path<? extends Chat> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QChat(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QChat(PathMetadata metadata, PathInits inits) {
        this(Chat.class, metadata, inits);
    }

    public QChat(Class<? extends Chat> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.handwriting = inits.isInitialized("handwriting") ? new com.nofriend.sonmandube.handwriting.domain.QHandwriting(forProperty("handwriting"), inits.get("handwriting")) : null;
<<<<<<< HEAD
<<<<<<< HEAD
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
=======
>>>>>>> bb671ba (feat: add WebSocket)
=======
        this.member = inits.isInitialized("member") ? new com.nofriend.sonmandube.member.domain.QMember(forProperty("member")) : null;
>>>>>>> 23a865a4 (cfeat: add spring security chatting)
    }

}

