package com.trucking.Security.HandlerError;

import lombok.AllArgsConstructor;


public class ValidationIntegrity  extends RuntimeException {
    public ValidationIntegrity(String s) {
        super(s);
    }
}
