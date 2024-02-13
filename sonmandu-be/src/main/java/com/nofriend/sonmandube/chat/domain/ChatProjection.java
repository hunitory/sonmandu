package com.nofriend.sonmandube.chat.domain;

public interface ChatProjection {
    Long getChatId();
    String getMessage();
    String getCreateTime();
    MemberProjection getMember();

    HandwritingProjection getHandwriting();

    interface MemberProjection {
        Long getMemberId();
        String getNickname();
<<<<<<< HEAD
<<<<<<< HEAD

        boolean isBadge();

        String getImageUrl();
=======
>>>>>>> 723abc5 (feat: add spring security chatting)
=======

        boolean isBadge();
>>>>>>> 5ea57fa (feat: add chat member)
    }


    interface HandwritingProjection {
        Long getHandwritingId();
        String getName();
        String getDownloadUrl();
    }
}