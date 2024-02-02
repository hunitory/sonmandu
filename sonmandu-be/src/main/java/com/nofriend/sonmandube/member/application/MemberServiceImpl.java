package com.nofriend.sonmandube.member.application;

import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.controller.request.EmailValidationRequest;
import com.nofriend.sonmandube.member.controller.request.LoginRequest;
import com.nofriend.sonmandube.member.controller.request.SignupRequest;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
import com.nofriend.sonmandube.member.controller.response.LoginResponse;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import com.nofriend.sonmandube.s3.S3Service;
import com.nofriend.sonmandube.util.FileDto;
import com.nofriend.sonmandube.util.FileUtil;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Random;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService, UserDetailsService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JavaMailSender javaMailSender;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtProvider jwtProvider;
    private final S3Service s3Service;

    @Value("${server.url}")
    private String serverUrl;
    @Value("${sonmandu.email}")
    private String sonmanduEmail;

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

//        sendEmailToken(newMember);
    }

    private void sendEmailToken(Member newMember) throws MessagingException {
        MimeMessage mimeMailMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, false, "UTF-8");
        mimeMessageHelper.setFrom(sonmanduEmail);
        mimeMessageHelper.setTo(newMember.getEmail());
        mimeMessageHelper.setSubject("[손만두] 이메일 활성화");
        mimeMessageHelper.setText("<html><head></head>" +
                "<body> <h1> 손만두 </h1> <a href='" + serverUrl +"/members/email-validation" +
                "?memberId=" + newMember.getMemberId() +
                "&emailToken=" + newMember.getEmailToken() + "'> 계정 활성화 버튼 </a> </body>" +
                "</html>", true);

        javaMailSender.send(mimeMailMessage);
    }

    @Override
    @Transactional
    public LoginResponse login(LoginRequest loginRequest) {
        Member member = memberRepository.findById(loginRequest.getId())
                .orElseThrow();

        if(!member.isValidated()){
            return null;
        }

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(member.getMemberId(), loginRequest.getPassword());
        Authentication authentication =  authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        String token = jwtProvider.generateToken(authentication);
        String refreshToken = jwtProvider.generateRefreshToken(authentication);

        member.setRefreshToken(refreshToken);

        return LoginResponse.builder()
                .token(token)
                .refreshToken(refreshToken)
                .build();
    }

    @Override
    @Transactional
    public void logout(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow();

        member.setRefreshToken(null);
    }

    @Override
    public boolean checkValidPassword(Long memberId, String password) {
        return memberRepository.findById(memberId)
                .orElseThrow()
                .getPassword()
                .equals(password);
    }

    @Override
    public MeInformationResponse findMeInformation(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow();

        return MeInformationResponse.builder()
                .nickname(member.getNickname())
                .id(member.getId())
                .name(member.getName())
                .email(member.getEmail())
                .build();
    }

    @Override
    public MemberInformationResponse findMemberInformationAll(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow();

        return MemberInformationResponse.builder()
                .imageUrl(member.getImageUrl())
                .nickname(member.getNickname())
                .introduction(member.getIntroduction())
                .badge(member.isBadge())
                .build();
    }

    @Override
    public void findMemberInformationId(String email, String name) throws MessagingException {
        Member member = memberRepository.findByEmailAndName(email, name)
                .orElseThrow();

        sendEmail(email, member.getId());
    }

    private void sendEmail(String email, String id) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
        mimeMessageHelper.setFrom(sonmanduEmail);
        mimeMessageHelper.setTo(email);
        mimeMessageHelper.setSubject("[손만두] 아이디 찾기");
        mimeMessageHelper.setText("아이디:" + id);

        javaMailSender.send(mimeMessage);
    }

    @Transactional
    @Override
    public void updateMemberInformationImage(Long memberId, MultipartFile image) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow();

        FileDto savedImage = s3Service.saveFile(image, FileUtil.createFileName(image));

        member.setImageUrl(savedImage.getUrl());
    }

    @Transactional
    @Override
    public void findMemberInformationPassword(String email, String name, String id) throws MessagingException {
        Member member = memberRepository.findByEmailAndNameAndId(email, name, id)
                .orElseThrow();

        String newPassword = generateString();

        member.setPassword(passwordEncoder.encode(newPassword));

        sendPassword(email, newPassword);
    }

    private void sendPassword(String email, String newPassword) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "UTF-8");
        mimeMessageHelper.setFrom(sonmanduEmail);
        mimeMessageHelper.setTo(email);
        mimeMessageHelper.setSubject("[손만두] 비밀번호 찾기");
        mimeMessageHelper.setText("비밀번호:" + newPassword);

        javaMailSender.send(mimeMessage);
    }

    private String generateString() {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();

        return random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
    }

    @Override
    public Boolean checkUniqueId(String id) {
        return memberRepository.existsById(id);
    }

    @Override
    public Boolean checkUniqueNickname(String nickname) {
        return memberRepository.existsByNickname(nickname);
    }

    @Override
    @Transactional
    public HttpStatus updateIsValidated(EmailValidationRequest emailValidationRequest){
        //TODO Exception
        Member member = memberRepository.findById(emailValidationRequest.getMemberId()).orElseThrow();

        if(!member.getEmailToken().equals(emailValidationRequest.getEmailToken())){
            return HttpStatus.BAD_REQUEST;
        }
        member.succeedEmailToken();

        return HttpStatus.MOVED_PERMANENTLY;
    }


    @Override
    @Transactional
    public void updateMemberInformationCommon(Long memberId, String informationType, String value) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow();

        switch (informationType){
            case "email" -> member.setEmail(value);
            case "nickname" -> member.setNickname(value);
            case "password" -> member.setPassword(passwordEncoder.encode(value));
            case "introduction" -> member.setIntroduction(value);
        }
    }

    @Override
    public void deleteMember(Long memberId) {
        memberRepository.deleteById(memberId);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = memberRepository.findById((long) Integer.parseInt(username))
                .orElseThrow(() -> new UsernameNotFoundException(username + "Not Found Member by Id"));
        member.setUserRole();

        return member;
    }
}
