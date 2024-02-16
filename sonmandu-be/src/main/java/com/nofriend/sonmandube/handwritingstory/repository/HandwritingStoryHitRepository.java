package com.nofriend.sonmandube.handwritingstory.repository;

import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryCountId;
import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStoryHit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HandwritingStoryHitRepository extends JpaRepository<HandwritingStoryHit, HandwritingStoryCountId> {
}
