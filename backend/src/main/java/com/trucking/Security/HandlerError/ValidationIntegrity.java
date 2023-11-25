package com.trucking.Security.HandlerError;


public class ValidationIntegrity  extends RuntimeException {
    public ValidationIntegrity(String s) {
        super(s);
    }
}
