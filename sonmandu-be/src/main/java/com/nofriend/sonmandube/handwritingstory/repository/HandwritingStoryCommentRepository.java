package com.nofriend.sonmandube.handwritingstory.repository;

import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface HandwritingStoryCommentRepository extends JpaRepository<HandwritingStoryComment, Long>{
    Optional<HandwritingStoryComment> findByHandwritingStoryCommentIdAndMemberMemberId(Long handwritingStoryCommentId, Long memberId);
}
