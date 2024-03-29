package com.nofriend.sonmandube.exception.handler;

import com.nofriend.sonmandube.exception.*;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.MessageDeliveryException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandler {

    @ExceptionHandler(MessageDeliveryException.class)
    public ResponseEntity<ErrorMessage> messageDeliveryException(MessageDeliveryException e){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ErrorMessageFactory.from(HttpStatus.UNAUTHORIZED, e.getMessage()));
    }

    @ExceptionHandler(InvalidDataAccessApiUsageException.class)
    public ResponseEntity<ErrorMessage> invalidDataAccessApiUsageException(InvalidDataAccessApiUsageException e){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ErrorMessageFactory.from(HttpStatus.BAD_REQUEST, e.getMessage()));
    }

    // 유효하지 않은 리프레시 토큰
    @ExceptionHandler(DenyRefreshTokenException.class)
    public ResponseEntity<ErrorMessage> expireRefreshToken(DenyRefreshTokenException e){
        return ResponseEntity.status(e.getStatus())
                .body(ErrorMessageFactory.from(e.getStatus(), e.getErrorMessage()));
    }

    // 만료된 토큰
    @ExceptionHandler(ExpireTokenException.class)
    public ResponseEntity<ErrorMessage> expireToken(ExpireTokenException e){
        return ResponseEntity.status(e.getStatus())
                .body(ErrorMessageFactory.from(e.getStatus(), e.getErrorMessage()));
    }

    // 만료된 리프레시 토큰
    @ExceptionHandler(ExpireRefreshTokenException.class)
    public ResponseEntity<ErrorMessage> expireRefreshToken(ExpireRefreshTokenException e){
        return ResponseEntity.status(e.getStatus())
                .body(ErrorMessageFactory.from(e.getStatus(), e.getErrorMessage()));
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorMessage> dataIntegrityViolationException(DataIntegrityViolationException e) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(ErrorMessageFactory.from(HttpStatus.CONFLICT, e.getMessage()));
    }

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
