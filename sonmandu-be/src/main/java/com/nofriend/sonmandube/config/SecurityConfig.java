package com.nofriend.sonmandube.config;

import com.nofriend.sonmandube.jwt.JwtFilter;
import com.nofriend.sonmandube.jwt.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
<<<<<<< HEAD
import org.springframework.security.web.util.matcher.RequestMatcher;
=======
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
>>>>>>> 5f3a5ef (feat: add spring security ROLE)

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig  {

    private final JwtProvider jwtProvider;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((requests) -> requests
<<<<<<< HEAD
                    .anyRequest()
                    .permitAll())
                .csrf(csrf -> csrf.ignoringRequestMatchers(PathRequest.toH2Console()).ignoringRequestMatchers("*/**"))
=======
                        .anyRequest()
                        .permitAll())
                .csrf(csrf -> csrf.ignoringRequestMatchers(PathRequest.toH2Console()).ignoringRequestMatchers("*").disable())
>>>>>>> d2eb2cd (feat: member signup and sendEmail and activate email)
                .headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin));

        http.addFilterBefore(new JwtFilter(jwtProvider), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
