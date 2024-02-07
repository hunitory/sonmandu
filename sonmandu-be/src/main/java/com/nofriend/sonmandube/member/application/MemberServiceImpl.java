package com.nofriend.sonmandube.member.application;

import com.nofriend.sonmandube.exception.DenyRefreshTokenException;
import com.nofriend.sonmandube.exception.ExpireRefreshTokenException;
import com.nofriend.sonmandube.exception.IdNotFoundException;
import com.nofriend.sonmandube.jwt.JwtCode;
import com.nofriend.sonmandube.jwt.JwtProvider;
import com.nofriend.sonmandube.member.controller.request.EmailTokenRequest;
<<<<<<< HEAD
=======
import com.nofriend.sonmandube.member.controller.request.EmailValidationRequest;
>>>>>>> abcce53e (feat: member, handwriting, handwritingstory api)
import com.nofriend.sonmandube.member.controller.request.LoginRequest;
import com.nofriend.sonmandube.member.controller.request.SignupRequest;
import com.nofriend.sonmandube.member.controller.response.LoginResponse;
import com.nofriend.sonmandube.member.controller.response.MeInformationResponse;
import com.nofriend.sonmandube.member.controller.response.MemberInformationResponse;
<<<<<<< HEAD
=======
import com.nofriend.sonmandube.member.controller.response.LoginResponse;
>>>>>>> abcce53e (feat: member, handwriting, handwritingstory api)
import com.nofriend.sonmandube.member.domain.EmailToken;
import com.nofriend.sonmandube.member.domain.Member;
import com.nofriend.sonmandube.member.repository.EmailTokenRepository;
import com.nofriend.sonmandube.member.repository.MemberRepository;
import com.nofriend.sonmandube.member.repository.TrophyRepository;
import com.nofriend.sonmandube.s3.S3Service;
import com.nofriend.sonmandube.util.FileDto;
import com.nofriend.sonmandube.util.FileUtil;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.validation.constraints.Email;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
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

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberServiceImpl implements MemberService, UserDetailsService {

    private final MemberRepository memberRepository;
    private final TrophyRepository trophyRepository;
<<<<<<< HEAD
<<<<<<< HEAD
    private final EmailTokenRepository emailTokenRepository;
=======
>>>>>>> e8fb302 (feat: findByMemeberInformation, show tropy info)
=======
    private final EmailTokenRepository emailTokenRepository;
>>>>>>> abcce53e (feat: member, handwriting, handwritingstory api)
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
<<<<<<< HEAD
    public String updateToken(String refreshToken) {
        JwtCode refreshTokenValidation = jwtProvider.validateToken(refreshToken);

        if(refreshTokenValidation == JwtCode.ACCESS){
            return jwtProvider.generateToken(jwtProvider.getAuthentication(refreshToken));
        }else if(refreshTokenValidation == JwtCode.EXPIRED){
            throw new ExpireRefreshTokenException("Expire refresh token");
        }else{ // refreshTokenValidation == JwtCode.DENIED
            throw new DenyRefreshTokenException("Deny refresh token");
        }
    }

    @Override
    @Transactional
=======
>>>>>>> abcce53e (feat: member, handwriting, handwritingstory api)
    public void signup(SignupRequest signupRequest) {
        Member newMember = Member.builder()
                .id(signupRequest.getId())
                .password(passwordEncoder.encode(signupRequest.getPassword()))
                .name(signupRequest.getName())
                .nickname(signupRequest.getNickname())
                .email(signupRequest.getEmail())
                .build();

        memberRepository.save(newMember);
<<<<<<< HEAD
=======

        sendEmailToken(newMember);
>>>>>>> e8fb302 (feat: findByMemeberInformation, show tropy info)
    }

<<<<<<< HEAD
    public Long sendEmailToken(@Email String email) throws MessagingException {
=======
    public Long sendEmailToken(String email) throws MessagingException {
>>>>>>> abcce53e (feat: member, handwriting, handwritingstory api)
        EmailToken emailToken = EmailToken.builder()
                .token(generateString())
                .build();

        MimeMessage mimeMailMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMailMessage, false, "UTF-8");
        mimeMessageHelper.setFrom(sonmanduEmail);
        mimeMessageHelper.setTo(email);
        mimeMessageHelper.setSubject("[손만두] 이메일 활성화");
        mimeMessageHelper.setText("<html><head></head>" +
                "<body> <h1> 손만두 </h1>" +
                "<h3> 인증번호 : " + emailToken.getToken() + "</h3> </body>" +
<<<<<<< HEAD
                "<body> <h1> 손만두 </h1> <a href='" + serverUrl +"/members/email-validation" +
                "?emailToken=" + emailToken + "'> 계정 활성화 버튼 </a> </body>" +
                "<body> <h1> 손만두 </h1>" +
                "<h3> 인증번호 : " + emailToken.getToken() + "</h3> </body>" +
=======
>>>>>>> abcce53e (feat: member, handwriting, handwritingstory api)
                "</html>", true);

        javaMailSender.send(mimeMailMessage);

        emailTokenRepository.save(emailToken);
        log.info("emial token : " + emailToken.toString());
        return emailToken.getEmailTokenId();
    }

    @Override
    @Transactional
    public LoginResponse login(LoginRequest loginRequest) {
        Member member = memberRepository.findById(loginRequest.getId())
<<<<<<< HEAD
                .orElseThrow(() -> new IdNotFoundException("정보에 해당하는 회원이 없습니다."));

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(member.getMemberId(), loginRequest.getPassword());

        Authentication authentication =  authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);

        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);

=======
                .orElseThrow();
        log.info("login member info" + member.toString());
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(member.getMemberId(), loginRequest.getPassword());
        log.info(usernamePasswordAuthenticationToken.toString());
        Authentication authentication =  authenticationManagerBuilder.getObject().authenticate(usernamePasswordAuthenticationToken);
        log.info("2");
        log.info(authentication.toString());
        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        log.info("3");
>>>>>>> 54005b2e (feat: change JwtFilter Exception Message)
        String token = jwtProvider.generateToken(authentication);
        String refreshToken = jwtProvider.generateRefreshToken(authentication);

        member.setRefreshToken(refreshToken);
        log.info(token);
        log.info(refreshToken);
        return LoginResponse.builder()
                .token(token)
                .refreshToken(refreshToken)
                .build();
    }

    @Override
    @Transactional
    public void logout(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IdNotFoundException("정보에 해당하는 회원이 없습니다."));

        member.setRefreshToken(null);
    }

    @Override
    public boolean checkValidPassword(Long memberId, String password) {
        String memberPassword = memberRepository.findById(memberId)
                .orElseThrow(() -> new IdNotFoundException("정보에 해당하는 회원이 없습니다."))
                .getPassword();

        return passwordEncoder.matches(password, memberPassword);
    }

    @Override
    public Boolean checkValidEmailToken(EmailTokenRequest emailTokenResponse) {
        return emailTokenRepository.findById(emailTokenResponse.getEmailTokenId())
                .orElseThrow(() -> new IdNotFoundException("정보에 해당하는 이메일이 없습니다."))
                .getToken()
                .equals(emailTokenResponse.getToken());
    }

    @Override
    public Boolean checkValidEmailToken(EmailTokenRequest emailTokenResponse) {
        return emailTokenRepository.findById(emailTokenResponse.getEmailTokenId())
                .orElseThrow()
                .getToken()
                .equals(emailTokenResponse.getToken());
    }

    @Override
    public MeInformationResponse findMeInformation(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IdNotFoundException("정보에 해당하는 회원이 없습니다."));

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
                .orElseThrow(() -> new IdNotFoundException("정보에 해당하는 회원이 없습니다."));

        return MemberInformationResponse.builder()
                .imageUrl(member.getImageUrl())
                .nickname(member.getNickname())
                .introduction(member.getIntroduction())
                .badge(member.isBadge())
                .trophies(trophyRepository.findTop8IdByMemberMemberIdOrderByTrophyIdCreateDate(memberId))
                .build();
    }

    @Override
    public void findMemberInformationId(String email, String name) throws MessagingException {
        Member member = memberRepository.findByEmailAndName(email, name)
                .orElseThrow(() -> new IdNotFoundException("정보에 해당하는 회원이 없습니다."));

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
                .orElseThrow(() -> new IdNotFoundException("정보에 해당하는 회원이 없습니다."));

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
        return !memberRepository.existsById(id);
    }

    @Override
    public Boolean checkUniqueNickname(String nickname) {
        return !memberRepository.existsByNickname(nickname);
    }

    @Override
    @Transactional
    public void updateMemberInformationCommon(Long memberId, String informationType, String value) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IdNotFoundException("정보에 해당하는 회원이 없습니다."));

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
//        log.info("load user by username");
        Member member = memberRepository.findById((long) Integer.parseInt(username))
                .orElseThrow(() -> new UsernameNotFoundException(username + "Not Found Member by Id"));
<<<<<<< HEAD
<<<<<<< HEAD
=======
        log.info(member.toString());
        member.setUserRole();
        log.info(member.toString());
>>>>>>> 54005b2e (feat: change JwtFilter Exception Message)
=======
//        log.info(member.toString());
        member.setUserRole();
//        log.info(member.toString());
>>>>>>> abcce53e (feat: member, handwriting, handwritingstory api)

        return member;
    }
}
