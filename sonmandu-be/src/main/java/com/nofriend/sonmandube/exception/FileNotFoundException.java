package com.nofriend.sonmandube.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public class FileNotFoundException extends RuntimeException {
    private final HttpStatus status = HttpStatus.BAD_REQUEST;
    private final String errorMessage;
}
