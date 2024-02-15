package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.HandwritingTag;
import com.nofriend.sonmandube.handwriting.domain.HandwritingTagId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HandwritingTagRepository extends JpaRepository<HandwritingTag, HandwritingTagId> {
}
