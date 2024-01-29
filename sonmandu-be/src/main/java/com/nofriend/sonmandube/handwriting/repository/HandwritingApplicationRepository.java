package com.nofriend.sonmandube.handwriting.repository;

import com.nofriend.sonmandube.handwriting.domain.HandwritingApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HandwritingApplicationRepository extends JpaRepository<HandwritingApplication, Long> {
}
