package com.nofriend.sonmandube.handwritingstory.repository;

import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryCountId;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HandwritingStoryLikeRepository extends JpaRepository<HandwritingStoryLike, HandwritingStoryCountId> {
}
