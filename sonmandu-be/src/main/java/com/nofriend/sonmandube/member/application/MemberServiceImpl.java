package com.nofriend.sonmandube.member.application;

import com.nofriend.sonmandube.member.controller.request.EmailValidationRequest;
import com.nofriend.sonmandube.member.controller.request.LoginRequest;
import com.nofriend.sonmandube.member.controller.request.SignupRequest;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
import com.nofriend.sonmandube.member.controller.response.LoginResponse;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender javaMailSender;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtProvider jwtProvider;
    private final RefreshTokenService refreshTokenService;

    @Override
    @Transactional
    public void signup(SignupRequest signupRequest) throws MessagingException {
        Member newMember = Member.builder()
                .id(signupRequest.getId())
                .password(passwordEncoder.encode(signupRequest.getPassword()))
                .name(signupRequest.getName())
                .nickname(signupRequest.getNickname())
                .email(signupRequest.getEmail())
                .isValidated(false)
                .emailToken(UUID.randomUUID().toString())
                .build();

        memberRepository.save(newMember);
        System.out.println(newMember.getMemberId());
        sendEmailToken(newMember);
    }

    private void sendEmailToken(Member newMember) throws MessagingException {
        MimeMessage mimeMailMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, false, "UTF-8");
        mimeMessageHelper.setFrom("sonmandu0103@gmail.com");
        mimeMessageHelper.setTo(newMember.getEmail());
        mimeMessageHelper.setSubject("[손만두] 이메일 활성화");
        mimeMessageHelper.setText("<html><head></head>" +
                "<body> <h1> 손만두 </h1> <a href='http://192.168.31.156:8080/members/email-validation" +
                "?memberId=" + newMember.getMemberId() +
                "&emailToken=" + newMember.getEmailToken() + "'> 계정 활성화 버튼 </a> </body>" +
                "</html>", true);


        //Post
//        mimeMessageHelper.setText("<html><head></head>" +
//                "<body> " +
//                "<form method='post' action='http://192.168.31.156:8080/members/email-validation'>" +
//                "<input type='hidden' name='memberId' value='" + newMember.getMemberId() + "'/>" +
//                "<input type='hidden' name='emailToken' value='" + newMember.getEmailToken() + "'/>" +
//                "<input type='submit' value='활성화하기'" +
//                "</form>" +
//                "</body></html>", true);


        javaMailSender.send(mimeMailMessage);
    }

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(loginRequest.getId(), loginRequest.getPassword());
        Authentication authentication =  authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

        String token = jwtProvider.generateToken(authentication);
        String refreshToken = jwtProvider.generateRefreshToken(authentication);
        Member member = (Member) authentication.getPrincipal();

        refreshTokenService.saveOrUpdate(member, refreshToken);

        return LoginResponse.builder()
                .token(token)
                .refreshToken(refreshToken)
                .build();
    }

    @Override
    public void logout(Long memberId) {

    }

    @Override
    public boolean checkValidPassword(String password) {
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
    public void findMemberInformationPassword(String email, String name, String id) {

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
    @Transactional
    public void updateIsValidated(EmailValidationRequest emailValidationRequest) {
        //TODO Exception
        Member member = memberRepository.findById(emailValidationRequest.getMemberId()).orElseThrow();
        System.out.println(member.getEmailToken());
        if(member.getEmailToken().equals(emailValidationRequest.getEmailToken())){
            member.succeedEmailToken();
        }
    }

    @Override
    public void updateMemberInformation(Long memberId, String informationType, String value) {

    }

    @Override
    public void deleteMember(Long memberId) {

    }
}
