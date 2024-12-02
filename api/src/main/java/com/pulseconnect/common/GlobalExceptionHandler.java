package com.pulseconnect.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;


@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handleNotFoundException(RuntimeException ex) {
        return new ResponseEntity<>(new ErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value()
        ), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();

        StringBuilder errorMessage = new StringBuilder("Required Fields ");

        for (FieldError fieldError : fieldErrors) {
            errorMessage.append(fieldError.getField()).append(" ");
        }

        return new ResponseEntity<>(new ErrorResponse(errorMessage.toString(), HttpStatus.BAD_REQUEST.value()), HttpStatus.BAD_REQUEST);
    }
}


