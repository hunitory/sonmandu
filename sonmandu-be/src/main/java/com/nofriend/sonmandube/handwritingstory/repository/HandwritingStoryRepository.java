package com.nofriend.sonmandube.handwritingstory.repository;

import com.nofriend.sonmandube.handwritingstory.domain.HandwritingStory;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface HandwritingStoryRepository extends JpaRepository<HandwritingStory, Long>, HandwritingStoryRepositoryCustom {
    Optional<HandwritingStory> findByHandwritingStoryIdAndMemberMemberId(Long handwritingStoryId, Long memberId);

    List<HandwritingStory> findAllByMemberMemberId(Long targetId);


}
