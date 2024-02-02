package com.nofriend.sonmandube.member.repository;

import com.nofriend.sonmandube.member.domain.Trophy;
import com.nofriend.sonmandube.member.domain.TrophyId;
import com.nofriend.sonmandube.member.domain.TrophyIdMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrophyRepository extends JpaRepository<Trophy, TrophyId> {
<<<<<<< HEAD
=======

>>>>>>> e8fb302 (feat: findByMemeberInformation, show tropy info)
    List<TrophyIdMapping> findTop8IdByMemberMemberIdOrderByTrophyIdCreateDate(Long member_memberId);
<<<<<<< HEAD

=======
>>>>>>> 32bc78e (feat: findByMemeberInformation, show tropy info)
}
