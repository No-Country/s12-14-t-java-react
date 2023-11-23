package com.trucking.Security.Entity;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
@NoArgsConstructor
public class NewUser {

    /**
     * Nombre del nuevo usuario.
     */
    @NotBlank(message = "Name can't be empty or null")
    private String name;

    /**
     * Correo electrónico del nuevo usuario.
     */
    @NotBlank(message = "Email can't be empty or null")
    @Email
    private String email;

    /**
     * Contraseña del nuevo usuario.
     */
    @NotBlank(message = "Password can't be empty or null")
    private String password;
}
