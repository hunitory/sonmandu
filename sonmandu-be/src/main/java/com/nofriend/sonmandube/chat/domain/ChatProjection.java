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

        boolean isBadge();

        String getImageUrl();
=======
>>>>>>> 1726fcf0 (feat: add spring security chatting)
    }


    interface HandwritingProjection {
        Long getHandwritingId();
        String getName();
        String getDownloadUrl();
    }
}