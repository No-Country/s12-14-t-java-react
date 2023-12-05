package com.trucking.Security.Dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginUserDto {
    /**
     * Correo electrónico del nuevo usuario.
     */
    @NotBlank(message = "El correo electrónico es obligatorio")
    @Email (message = "El correo electrónico no es válido")
    @Schema(description = "Email", example = "exampe@email.com")
    private String email;

    /**
     * Contraseña del nuevo usuario.
     */
    @NotBlank(message = "La contraseña es obligatoria")
    @Schema(description = "Password", example = "asas@*78Ad")
    private String password;
}
