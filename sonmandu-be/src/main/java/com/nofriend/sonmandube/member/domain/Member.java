package com.nofriend.sonmandube.member.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Persistent;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Builder
@ToString
@EntityListeners(AuditingEntityListener.class)
public class Member implements UserDetails {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;

    @Column(unique = true)
    private String id;

    @JsonIgnore
    @Setter
    private String password;

    private String name;

    @Setter
    private String nickname;

    @Setter
    private String email;

    @Setter
    private String imageUrl;

    @Setter
    private String introduction;

    @Setter
<<<<<<< HEAD
<<<<<<< HEAD
    @JsonIgnore
=======
>>>>>>> 6167459 (feat: add imageUrl in jwt token)
    @Column(length = 512)
    private String refreshToken;

<<<<<<< HEAD
=======
    @JsonIgnore
    private String emailToken;

>>>>>>> e9e2247 (feat: change JwtFilter Exception Message)
=======
    @JsonIgnore
    @Column(length = 512)
    private String refreshToken;

>>>>>>> 125ae4a (fix: jpa table)
    private boolean isBadge;

    @CreatedDate
    private LocalDateTime createTime;

    @Transient
    private List<GrantedAuthority> authorities;

<<<<<<< HEAD
<<<<<<< HEAD
=======
    public void succeedEmailToken(){
        this.enabled = true;
    }

>>>>>>> e9e2247 (feat: change JwtFilter Exception Message)
=======
>>>>>>> 7ba0a74 (feat: member, handwriting, handwritingstory api)
    public void setUserRole(){
        this.authorities = List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getUsername() {
        return String.valueOf(this.memberId);
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
