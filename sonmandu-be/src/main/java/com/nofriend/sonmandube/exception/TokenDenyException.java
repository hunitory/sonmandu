package com.nofriend.sonmandube.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public class TokenDenyException extends RuntimeException{
    private final HttpStatus status = HttpStatus.FORBIDDEN;
    private final String errorMessage;
}
