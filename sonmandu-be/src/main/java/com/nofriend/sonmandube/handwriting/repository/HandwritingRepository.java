package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HandwritingRepository extends JpaRepository<Handwriting, Long>, HandwritingRepositoryCustom {
}
