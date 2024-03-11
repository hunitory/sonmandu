package com.nofriend.sonmandube.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@Getter
public class ExpireTokenException extends RuntimeException{
    private final HttpStatus status = HttpStatus.UNAUTHORIZED;
    private final String errorMessage;
}
