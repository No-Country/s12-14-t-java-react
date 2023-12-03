package com.trucking.Security.HandlerError;

import com.trucking.Security.Dto.ErrorMsgDto;
import com.trucking.Security.Dto.MsgDto;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.ValidationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.*;

@RestControllerAdvice
public class HandlerErrors extends Throwable {
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity tratarError404(){
        return ResponseEntity.notFound().build();
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity tratarError400(MethodArgumentNotValidException e){
        ErrorMsgDto response = new ErrorMsgDto();
        response.setError("Error de validacion de DTO");
        response.setDetails(e.getFieldErrors().stream().map((a)->a.getDefaultMessage()).toList());
        return ResponseEntity.badRequest().body(response);
    }
    @ExceptionHandler(ValidationIntegrity.class)
    public ResponseEntity errorHandlerValidacionesIntegridad(Exception e){
        ErrorMsgDto response = new ErrorMsgDto();
        response.setError("Error de validación");
        response.setDetails(Arrays.asList(e.getMessage()));
        return new ResponseEntity(response, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(ValidationException.class)
    public ResponseEntity errorHandlerValidacionesDeNegocio(Exception e){
        Map<String, Object> response = new HashMap<>();
        response.put("Error", "Error de validación");

        List<String> errores = new ArrayList<>();
        errores.add(e.getMessage());
        response.put("Details", errores);

        return ResponseEntity.badRequest().body(response);
    }
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<MsgDto> handleHttpMessageNotReadable(HttpMessageNotReadableException ex) {
        // Obtener el mensaje de error original
        String originalMessage = ex.getMostSpecificCause().getMessage();

        // Verificar si el error está relacionado con la deserialización de un Enum
        if (originalMessage.contains("Cannot deserialize value of type 'com.trucking.Entity.Enum.RoleEmployee'")) {

            return new ResponseEntity("Error: Valor de Enum no válido. Los valores aceptados son: [DRIVER, MAINTENANCE, OWNER]", HttpStatus.BAD_REQUEST);
        }

        // Otro manejo de errores si es necesario

       return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MsgDto("rol es invalido"));
    }

    private record ErrorValidationData(String campo, String error){
        public ErrorValidationData(FieldError error) {
            this(error.getField(), error.getDefaultMessage());
        }
    }
}
