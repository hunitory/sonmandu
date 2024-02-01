package com.nofriend.sonmandube.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public class IdNotFoundException extends RuntimeException {

    private final HttpStatus status = HttpStatus.CONFLICT;
    private final String errorMessage;

}
