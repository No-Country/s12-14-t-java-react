package com.trucking.exception;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author ROMULO
 * @package com.nocountry.trucking.exception
 * @license Lrpa, zephyr cygnus
 * @since 10/10/2023
 */
@Getter
@Setter
public final class ErrorResponseMessage implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private final String message;
    private final String path;
    private final LocalDateTime timeStamp;
    private final HttpStatus errorCode;
    private final int status;

    @Builder
    public ErrorResponseMessage(String message, String path, HttpStatus httpStatus) {
        this.message = message;
        this.path = path;
        this.timeStamp = LocalDateTime.now();
        this.errorCode = httpStatus;
        this.status = httpStatus.value();
        //this.errors = isNull(errors) ? List.of() : errors;
    }
}
