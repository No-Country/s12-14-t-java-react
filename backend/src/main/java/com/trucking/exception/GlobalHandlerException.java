package com.trucking.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.net.URI;
import java.time.LocalDateTime;

/**
 * @author ROMULO
 * @package com.trucking.exception
 * @license Lrpa, zephyr cygnus
 * @since 5/12/2023
 */
@RestControllerAdvice
public class GlobalHandlerException {


    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ProblemDetail handleDataIntegrityViolationException(DataIntegrityViolationException e, HttpServletRequest request) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(HttpStatus.CONFLICT, e.getMessage());
        problemDetail.setProperty("date", LocalDateTime.now());
        problemDetail.setInstance(URI.create(request.getRequestURL().toString()));
        return problemDetail;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = {DuplicateEntityException.class})
    public ResponseEntity<ErrorResponseMessage> handleDuplicateEntityException(DuplicateEntityException ex, WebRequest request) {
        ErrorResponseMessage error = ErrorResponseMessage.builder()
                .message(ex.getMessage())
                .path(request.getContextPath())
                .httpStatus(HttpStatus.BAD_REQUEST)
                .build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(value = {ResourceNotFoundException.class})
    public ResponseEntity<ErrorResponseMessage> handleResourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
        ErrorResponseMessage error = ErrorResponseMessage.builder()
                .message(ex.getCause().getMessage())
                .path(request.getContextPath())
                .httpStatus(HttpStatus.NOT_FOUND)
                .build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(InputNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ProblemDetail handleInputNotValidException(InputNotValidException ex, HttpServletRequest request) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(
                ex.getStatusCode(), ex.getLocalizedMessage()
        );
        problemDetail.setInstance(URI.create(request.getRequestURL().toString()));
        problemDetail.setTitle(ex.getStatusCode().toString());
        problemDetail.setProperty("date", LocalDateTime.now());
        return problemDetail;
    }

    @ExceptionHandler(value = {GenericException.class})
    public ResponseEntity<ErrorResponseMessage> handleGenericException(GenericException ex, WebRequest request) {
        ErrorResponseMessage error = ErrorResponseMessage.builder()
                .message(ex.getMessage())
                .path(request.getContextPath())
                .httpStatus(ex.getHttpStatus())
                .build();
        return ResponseEntity.status(ex.getHttpStatus()).body(error);
    }

}
