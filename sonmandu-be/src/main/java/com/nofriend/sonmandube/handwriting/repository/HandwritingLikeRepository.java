package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.HandwritingCountId;
import com.nofriend.sonmandube.handwriting.domain.HandwritingLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HandwritingLikeRepository extends JpaRepository<HandwritingLike, HandwritingCountId> {


}
