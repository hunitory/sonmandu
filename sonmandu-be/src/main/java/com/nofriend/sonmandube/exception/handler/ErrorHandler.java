package com.nofriend.sonmandube.exception.handler;

import com.nofriend.sonmandube.exception.*;
<<<<<<< HEAD
<<<<<<< HEAD
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.InvalidDataAccessApiUsageException;
<<<<<<< HEAD
=======
>>>>>>> e2b9b34 (feat: change token exception)
=======
import org.springframework.dao.DataIntegrityViolationException;
>>>>>>> c31b9a8 (feat: change dateTime)
=======
>>>>>>> 2a88da7 (refactor: status code)
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.MessageDeliveryException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandler {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be46cd8 (feat: chatting)
    @ExceptionHandler(MessageDeliveryException.class)
    public ResponseEntity<ErrorMessage> messageDeliveryException(MessageDeliveryException e){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ErrorMessageFactory.from(HttpStatus.UNAUTHORIZED, e.getMessage()));
    }

<<<<<<< HEAD
=======
>>>>>>> 2a88da7 (refactor: status code)
=======
>>>>>>> be46cd8 (feat: chatting)
    @ExceptionHandler(InvalidDataAccessApiUsageException.class)
    public ResponseEntity<ErrorMessage> invalidDataAccessApiUsageException(InvalidDataAccessApiUsageException e){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ErrorMessageFactory.from(HttpStatus.BAD_REQUEST, e.getMessage()));
    }

    // 유효하지 않은 리프레시 토큰
    @ExceptionHandler(DenyRefreshTokenException.class)
    public ResponseEntity<ErrorMessage> expireRefreshToken(DenyRefreshTokenException e){
=======
    @ExceptionHandler(RefreshTokenExpireException.class)
    public ResponseEntity<ErrorMessage> refreshTokenExpireException(RefreshTokenExpireException e){
>>>>>>> e2b9b34 (feat: change token exception)
=======
    // 유효하지 않은 리프레시 토큰
    @ExceptionHandler(DenyRefreshTokenException.class)
    public ResponseEntity<ErrorMessage> expireRefreshToken(DenyRefreshTokenException e){
>>>>>>> 71d2f9b (feat: renew refresh token)
        return ResponseEntity.status(e.getStatus())
                .body(ErrorMessageFactory.from(e.getStatus(), e.getErrorMessage()));
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // 만료된 토큰
    @ExceptionHandler(ExpireTokenException.class)
    public ResponseEntity<ErrorMessage> expireToken(ExpireTokenException e){
=======

    @ExceptionHandler(TokenExpireException.class)
    public ResponseEntity<ErrorMessage> tokenExpireException(TokenExpireException e){
>>>>>>> e2b9b34 (feat: change token exception)
=======
    // 만료된 토큰
    @ExceptionHandler(ExpireTokenException.class)
    public ResponseEntity<ErrorMessage> expireToken(ExpireTokenException e){
>>>>>>> be46cd8 (feat: chatting)
        return ResponseEntity.status(e.getStatus())
                .body(ErrorMessageFactory.from(e.getStatus(), e.getErrorMessage()));
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be46cd8 (feat: chatting)
    // 만료된 리프레시 토큰
    @ExceptionHandler(ExpireRefreshTokenException.class)
    public ResponseEntity<ErrorMessage> expireRefreshToken(ExpireRefreshTokenException e){
=======
    @ExceptionHandler(TokenDenyException.class)
    public ResponseEntity<ErrorMessage> tokenDenyException(TokenDenyException e){
>>>>>>> e2b9b34 (feat: change token exception)
=======
    // 만료된 리프레시 토큰
    @ExceptionHandler(ExpireRefreshTokenException.class)
    public ResponseEntity<ErrorMessage> expireRefreshToken(ExpireRefreshTokenException e){
>>>>>>> 71d2f9b (feat: renew refresh token)
        return ResponseEntity.status(e.getStatus())
                .body(ErrorMessageFactory.from(e.getStatus(), e.getErrorMessage()));
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // 이미 있는 데이터
=======
>>>>>>> c31b9a8 (feat: change dateTime)
=======
    // @Valid에 잡힌 에러
>>>>>>> 71d2f9b (feat: renew refresh token)
=======
    // 이미 있는 데이터
>>>>>>> 339b19b (fix: bugs)
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorMessage> dataIntegrityViolationException(DataIntegrityViolationException e) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(ErrorMessageFactory.from(HttpStatus.CONFLICT, e.getMessage()));
    }

<<<<<<< HEAD
=======
>>>>>>> e2b9b34 (feat: change token exception)
=======
>>>>>>> e9e2247 (feat: change JwtFilter Exception Message)
=======
>>>>>>> c31b9a8 (feat: change dateTime)
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
