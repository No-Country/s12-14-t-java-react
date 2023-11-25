package com.trucking.Security.HandlerError;

import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.ValidationException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestControllerAdvice
public class HandlerErrors extends Throwable {



    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity tratarError404(){
        return ResponseEntity.notFound().build();
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity tratarError400(MethodArgumentNotValidException e){
        Map<String,Object> response= new HashMap<>();
        response.put("Error", "Validation error");
        var errores = e.getFieldErrors().stream().map((a)->a.getDefaultMessage()).toList();
        response.put("Details", errores);
        return ResponseEntity.badRequest().body(response);
    }
    @ExceptionHandler(ValidationIntegrity.class)
    public ResponseEntity errorHandlerValidacionesIntegridad(Exception e){
        Map<String, Object> response = new HashMap<>();
        response.put("Error", "Validation error");

        List<String> errores = new ArrayList<>();
        errores.add(e.getMessage());
        response.put("Details", errores);

        return ResponseEntity.badRequest().body(response);
    }

    @ExceptionHandler(ValidationException.class)
    public ResponseEntity errorHandlerValidacionesDeNegocio(Exception e){
        Map<String, Object> response = new HashMap<>();
        response.put("Error", "Validation error");

        List<String> errores = new ArrayList<>();
        errores.add(e.getMessage());
        response.put("Details", errores);

        return ResponseEntity.badRequest().body(response);
    }

    private record ErrorValidationData(String campo, String error){
        public ErrorValidationData(FieldError error) {
            this(error.getField(), error.getDefaultMessage());
        }
    }
}
