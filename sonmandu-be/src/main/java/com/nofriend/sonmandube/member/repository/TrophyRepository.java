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

>>>>>>> f6ae44c4 (feat: findByMemeberInformation, show tropy info)
    List<TrophyIdMapping> findTop8IdByMemberMemberIdOrderByTrophyIdCreateDate(Long member_memberId);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 32bc78e (feat: findByMemeberInformation, show tropy info)
=======

>>>>>>> 582ef31 (feat: 배지, 트로피 수여 추가)
}
