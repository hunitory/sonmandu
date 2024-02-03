package com.nofriend.sonmandube.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public class FailedFileSaveException extends RuntimeException {

    private final HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
    private final String errorMessage;

}
