package com.nocountry.trucking.controller.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
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
@NoArgsConstructor
public class NewUser {

    /**
     * Nombre del nuevo usuario.
     */
    @NotBlank(message = "Name can't be empty or null")
    @Schema(description = "name user", example = "Maria angela")
    private String name;

    /**
     * Correo electrónico del nuevo usuario.
     */
    @NotBlank(message = "Email can't be empty or null")
    @Email
    @Schema(description = "Email user", example = "a@b.com")
    private String email;

    /**
     * Contraseña del nuevo usuario.
     */
    @NotBlank(message = "Password can't be empty or null")
    @Schema(description = "Password", defaultValue = "123456")
    private String password;
}
