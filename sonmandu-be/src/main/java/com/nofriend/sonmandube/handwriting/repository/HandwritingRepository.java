package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.Handwriting;
import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HandwritingRepository extends JpaRepository<Handwriting, Long>, HandwritingRepositoryCustom {

    Optional<Handwriting> findByHandwritingId(Long handwritingId);
}
