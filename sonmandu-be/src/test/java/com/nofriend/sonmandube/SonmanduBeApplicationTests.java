package com.nofriend.sonmandube;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
@DisplayName("jwt Test")
class SonmanduBeApplicationTests {

    @Test
    @DisplayName("의존성 주입 테스트")
    void contextLoads(@Value("${jwt.secret}") String secret, @Value("${server.url}") String serverUrl) {
        Assert.notNull(secret, "secret in null");
        System.out.println(secret);
        Assert.isTrue(secret.equals("dlksjfidsiojfoidsjfoijsdoijfoidsfoidjsoifdijgldfkgmlsffsdijfoijdsofijsdoijfodisjfoijsdoijfo"), "secret에 ${jwt.secret} 주입 완료");
        Assert.isTrue(serverUrl.equals("https://i10b111.p.ssafy.io"), "failure serverUrl injection");
    }



}
