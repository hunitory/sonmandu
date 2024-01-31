package com.nofriend.sonmandube.exception.handler;

import org.springframework.http.HttpStatus;

public class ErrorMessageFactory {

    public static ErrorMessage from(HttpStatus httpStatus, String message) {
        return new ErrorMessage(httpStatus.value(), httpStatus.name(), message);
    }
}
