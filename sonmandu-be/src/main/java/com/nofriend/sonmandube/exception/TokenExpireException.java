package com.nofriend.sonmandube.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public class TokenExpireException extends RuntimeException{
    private final HttpStatus status = HttpStatus.UNAUTHORIZED;
    private final String errorMessage;

}
