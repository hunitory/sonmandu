package com.nofriend.sonmandube.exception.handler;

import com.nofriend.sonmandube.exception.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandler {

    @ExceptionHandler(FailedFileSaveException.class)
    public ResponseEntity<ErrorMessage> failedFileSaveException(FailedFileSaveException e) {
        return ResponseEntity.status(e.getStatus())
                .body(ErrorMessageFactory.from(e.getStatus(), e.getErrorMessage()));
    }

    @ExceptionHandler(IdNotFoundException.class)
    public ResponseEntity<ErrorMessage> idNotFoundException(IdNotFoundException e) {
        return ResponseEntity.status(e.getStatus())
                .body(ErrorMessageFactory.from(e.getStatus(), e.getErrorMessage()));
    }

    @ExceptionHandler(FileNotFoundException.class)
    public ResponseEntity<ErrorMessage> fileNotFoundException(FileNotFoundException e) {
        return ResponseEntity.status(e.getStatus())
                .body(ErrorMessageFactory.from(e.getStatus(), e.getErrorMessage()));
    }
}
