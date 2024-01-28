package com.nofriend.sonmandube;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class TestContrroller {

    @GetMapping("/")
    public String hello(){
        return "hello";
    }

}
