package com.nofriend.sonmandube.test;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/test")
public class TestContrroller {

    private final TestRepository testRepository;

    @GetMapping("")
    public String hello(){
        return "hello";
    }

    @GetMapping("/create")
    public Test create() {
        return testRepository.save(Test.builder().password("11").build());
    }

    @GetMapping("/select")
    public List<Test> select() {
        return testRepository.findAll();
    }

    @GetMapping("/update")
    public Test update() throws Exception {
        Optional<Test> test = testRepository.findById(1L);
        Test newTest = Test.builder()
                .id(1L)
                .password(test.orElseThrow(() -> new Exception()).getPassword() + 1).build();


        return testRepository.save(newTest);
    }

    @GetMapping("delete")
    public void delete() {
        testRepository.deleteById(1L);
    }

}
