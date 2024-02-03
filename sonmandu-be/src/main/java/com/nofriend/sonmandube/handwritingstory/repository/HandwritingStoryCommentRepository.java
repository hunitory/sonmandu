package com.nofriend.sonmandube.handwritingstory.repository;

import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryComment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface HandwritingStoryCommentRepository extends JpaRepository<HandwritingStoryComment, Long>{
}
