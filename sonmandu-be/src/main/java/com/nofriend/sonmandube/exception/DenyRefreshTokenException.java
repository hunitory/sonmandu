package com.nofriend.sonmandube.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@Getter
public class DenyRefreshTokenException extends RuntimeException{
    private final HttpStatus status = HttpStatus.FORBIDDEN;
    private final String errorMessage;
}
