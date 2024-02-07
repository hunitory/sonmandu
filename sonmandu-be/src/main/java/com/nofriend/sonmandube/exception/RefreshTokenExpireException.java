package com.nofriend.sonmandube.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public class RefreshTokenExpireException extends RuntimeException{
    private final HttpStatus status = HttpStatus.GONE;
    private final String errorMessage;

}
