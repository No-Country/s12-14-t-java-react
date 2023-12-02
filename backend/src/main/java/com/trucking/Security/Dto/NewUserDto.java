package com.trucking.Security.Dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

/**
 * Clase que representa los datos de un nuevo usuario antes de su registro.
 */
@Data
@Builder
@AllArgsConstructor
public class NewUserDto {

    /**
     * Nombre de la compañia del nuevo usuario.
     */
    @Pattern(regexp = "^[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{|} ]{2,50}$", message = "Company name es invalido")
    @Schema(description = "Company name", example = "Vehicle ORG")
    private String companyName;

    /**
     * Nombre del nuevo usuario.
     */
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,50}$", message = "Name es invalido")
    @Schema(description = "name user", example = "Maria angela")
    private String name;

    /**
     * Apellido del nuevo usuario.
     */
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,20}$", message = "Last name es invalido")
    @Schema(description = "last name user", example = "Peña")
    private String lastName;

    /**
     * Correo electrónico del nuevo usuario.
     */
    //@Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "El email es invalido")
    @Email
    @Schema(description = "Email user", example = "a@b.com")
    private String email;

    /**
     * Contraseña del nuevo usuario.
     */
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!#$%&()*+\\-/?@\\[\\]^_{\\\\|}])[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{\\\\|}]{8,12}$",
            message = "La contraseña debe tener entre 8 y 12 caracteres y tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.")
    @Schema(description = "Password", defaultValue = "123456An")
    private String password;
}
