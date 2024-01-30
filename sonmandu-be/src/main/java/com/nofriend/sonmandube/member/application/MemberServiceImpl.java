package com.nofriend.sonmandube.member.application;


import com.nofriend.sonmandube.member.controller.request.EmailValidationRequest;
import com.nofriend.sonmandube.member.controller.request.LoginRequest;
import com.nofriend.sonmandube.member.controller.request.SignupRequest;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
import com.nofriend.sonmandube.member.controller.response.TokenResponse;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;

    @Override
    public void signup(SignupRequest signupRequest) {

    }

    @Override
    public TokenResponse login(LoginRequest loginRequest) {
        return null;
    }

    @Override
    public void logout(Long memberId) {

    }

    @Override
    public boolean checkVaildPassword(String password) {
        return false;
    }

    @Override
    public MeInformationResponse findMeInformation(Long memberId) {
        return null;
    }

    @Override
    public MemberInformationResponse findMemberInformationAll(Long memberId) {
        return null;
    }

    @Override
    public void findMemberInformationId(String email, String name) {

    }

    @Override
    public void findMemberInfomationPassword(String email, String name, String id) {

    }

    @Override
    public Boolean checkUniqueId(String id) {
        return null;
    }

    @Override
    public Boolean checkUniqueNickname(String nickname) {
        return null;
    }

    @Override
    public void updateIsValidated(EmailValidationRequest emailValidationRequest) {

    }

    @Override
    public void updateMemberInformation(Long memberId, String informationType, String value) {

    }

    @Override
    public void deleteMember(Long memberId) {

    }
}
