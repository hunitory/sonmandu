package com.nofriend.sonmandube.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RequiredArgsConstructor
@Getter
public class ExpireRefreshTokenException extends RuntimeException{
    private final HttpStatus status = HttpStatus.GONE;
    private final String errorMessage;
}
