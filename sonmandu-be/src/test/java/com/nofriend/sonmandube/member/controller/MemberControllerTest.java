package com.nofriend.sonmandube.member.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
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
import org.springframework.http.MediaType;
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

    @Autowired
    private ObjectMapper objectMapper;

    Member sampleMember;
    @PostConstruct
    private void init(){
         sampleMember = Member.builder()
                 .memberId(11L)
                 .id("ssafy1233")
                 .password("123123123")
//                 .name("싸피삐1233")
//                 .nickname("사삐삐1233")
                 .build();
    }

    @Test
    @DisplayName("로그인 테스트 - 성공")
    public void testLoginSuccess() throws Exception {
        mockMvc.perform(
                post("/members/login")
                        .with(csrf())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"id":  "%s",
                                "password":  "%s"}
                                """.formatted(sampleMember.getId(), sampleMember.getPassword()))
        ).andExpect(status().isOk())
                .andDo(print());
    }

    @Test
    @WithMockUser
    @DisplayName("로그아웃 테스트-성공")
    @Transactional
    public void testLogoutSuccess() throws Exception {
        mockMvc.perform(
                post("/members/logout")
                        .with(csrf()).with(user(sampleMember.getUsername()))
        ).andExpect(status().isNoContent());

        Member member = memberRepository.findById(sampleMember.getMemberId())
                .orElseThrow();

        Assert.isNull(member.getRefreshToken(),"isNull member.refreshToken");
    }

    @Test
    @DisplayName("비밀번호 중복 체크-성공")
    void testValidPasswordSuccess() throws Exception {
        mockMvc.perform(
                post("/members/valid-password")
                        .with(csrf()).with(user("11"))
                        .content("""
                            {"password": "123123123"}
                        """)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isOk())
                .andExpect(content().string("true"));
    }



    @Test
    @DisplayName("비밀번호 중복 체크-실패")
    void testValidPasswordFailure() throws Exception {
        mockMvc.perform(
                        post("/members/valid-password")
                                .with(csrf()).with(user("11").roles("USER"))
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {"password": "123123122"}
                                        """)
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
        String newEmail = "sssss@sss.sss";
        mockMvc.perform(
                patch("/members/email")
                        .with(csrf()).with(user(sampleMember.getUsername()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"value": "%s"}
                                """.formatted(newEmail))
        ).andExpect(status().isNoContent())
                .andDo(print());

        Assert.isTrue(memberRepository.findById(sampleMember.getMemberId())
                .orElseThrow()
                .getEmail().equals(newEmail)
        ,"이메일 변경 후 확인");

    }

}