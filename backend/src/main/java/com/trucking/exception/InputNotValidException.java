package com.trucking.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.server.ResponseStatusException;

/**
 * @author ROMULO
 * @package com.nocountry.trucking.exception
 * @license Lrpa, zephyr cygnus
 * @since 27/10/2023
 */
public class InputNotValidException extends ResponseStatusException {
    public InputNotValidException(String message) {
        super(HttpStatus.BAD_REQUEST, message);
    }

    public InputNotValidException(HttpStatus status, String reason) {
        super(status, reason);
    }
}
