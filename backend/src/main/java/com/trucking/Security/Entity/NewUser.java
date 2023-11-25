package com.trucking.Security.Entity;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Clase que representa los datos de un nuevo usuario antes de su registro.
 */
@Data
@Builder
@AllArgsConstructor
public class NewUser {

    /**
     * Nombre del nuevo usuario.
     */
    @NotBlank(message = "Name can't be null or empty")
    private String name;

    /**
     * Correo electrónico del nuevo usuario.
     */
    @NotBlank(message = "Email can't be null or empty")
    @Email
    private String email;

    /**
     * Contraseña del nuevo usuario.
     */
    @NotBlank(message = "Password can't be null or empty")
    private String password;
}
