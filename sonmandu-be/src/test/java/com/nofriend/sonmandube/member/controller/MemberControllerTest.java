package com.nofriend.sonmandube.member.controller;

import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.domain.Role;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@Slf4j
@SpringBootTest
@AutoConfigureMockMvc
class MemberControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private MemberRepository memberRepository;

    Member sampleMember;
    @PostConstruct
    private void init(){
         sampleMember = Member.builder()
                .memberId(1L)
                .id("qweqweqwe")
                .password("123123123")
                .nickname("asdasd")
                .name("ffff")
                 .email("ssafy@123.com")
                .refreshToken("DSAkjndkjsan")
                .build();

        memberRepository.save(sampleMember);
    }

    @Test
    @WithMockUser
    @DisplayName("로그아웃 테스트-성공")
    @Transactional
    public void testLogoutSuccess() throws Exception {
        Member member = memberRepository.findById(1L)
                        .orElseThrow();

        Assert.notNull(member.getRefreshToken(), "isNull member.refreshToken");

        mockMvc.perform(
                post("/members/logout").with(csrf())
                        .requestAttr("memberId", "1")
        ).andExpect(status().isOk());

        Member member2 = memberRepository.findById(1L)
                .orElseThrow();

        Assert.isNull(member2.getRefreshToken(),"isNull member.refreshToken");
    }

    @Test
    @DisplayName("비밀번호 중복 체크-성공")
    void testValidPasswordSuccess() throws Exception {
        mockMvc.perform(
                post("/members/valid-password")
                        .with(csrf()).with(user("1").roles("USER"))
                        .requestAttr("memberId", "1")
                        .param("password", "123123123")
        ).andExpect(status().isOk())
                .andExpect(content().string("true"));
    }

    @Test
    @DisplayName("비밀번호 중복 체크-실패")
    void testValidPasswordFailure() throws Exception {
        mockMvc.perform(
                        post("/members/valid-password")
                                .with(csrf()).with(user("1").roles("USER"))
                                .requestAttr("memberId", "1")
                                .param("password", "123123121")
                ).andExpect(status().isOk())
                .andExpect(content().string("false"));
    }

    @Test
    @DisplayName("본인 정보 가져오기 테스트-성공")
    void testFindMeInformationSuccess() throws Exception {
        mockMvc.perform(
                get("/members/me")
                        .with(csrf())
                        .with(user("1").roles("USER"))
                        .requestAttr("memberId", "1")
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value("qweqweqwe"))
                .andDo(print());
    }

    @Test
    @DisplayName("유저 정보 수정")
    void testUpdateMemberInformation() throws Exception {
        mockMvc.perform(
                patch("/members/email")
                        .with(csrf())
                        .with(user("1").roles("USER"))
                        .requestAttr("memberId", "1")
//                        .param("value", "213")
                        .content("value1111")
        ).andExpect(status().isOk());

    }

    @Test
    void testDeleteMember() throws Exception {
        mockMvc.perform(
                delete("/members")
                        .with(csrf())
                        .with(user("1").roles("USER"))
                        .requestAttr("memberId", "1")
        ).andExpect(status().isOk());

        Assert.isTrue(!memberRepository.existsById("1"), "delete member");

    }
}