package com.trucking.exception;

import org.springframework.dao.DataIntegrityViolationException;

import java.io.Serial;

/**
 * @author ROMULO
 * @package com.nocountry.trucking.exception
 * @license Lrpa, zephyr cygnus
 * @since 10/10/2023
 */
public class DuplicateEntityException extends RuntimeException {
    @Serial
    private static final long serialVersionUID = 1L;
    public DuplicateEntityException(String msg) {
        super(msg);
    }
}
