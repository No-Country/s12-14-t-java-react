package com.trucking.security.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
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

    @NotBlank (message = "El nombre de la empresa es obligatorio")
    @Pattern(regexp = "^[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{|} ]{2,50}$|^$", message = "El nombre de la empresa no es válido")
    @Schema(description = "Company name", example = "Vehicle ORG")
    private String companyName;

    /**
     * Nombre del nuevo usuario.
     */
    @NotBlank(message = "El nombre es obligatorio")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,50}$|^$", message = "El nombre no es válido")
    @Schema(description = "name user", example = "Maria angela")
    private String name;

    /**
     * Apellido del nuevo usuario.
     */
    @NotBlank(message = "El apellido es obligatorio")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,50}$|^$", message = "El apellido no es válido")
    @Schema(description = "last name user", example = "Peña")
    private String lastName;

    /**
     * Correo electrónico del nuevo usuario.
     */
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "El correo electrónico no es válido")
    @NotBlank(message = "El correo electrónico es obligatorio")
    @Schema(description = "Email user", example = "a@b.com")
    private String email;

    /**
     * Contraseña del nuevo usuario.
     */

    @NotBlank(message = "La contraseña es obligatoria")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!#$%&()*+\\-/?@\\[\\]^_{\\\\|}])[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{\\\\|}]{8,12}$|^$",
            message = "La contraseña debe tener entre 8 y 12 caracteres y tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.")
    @Schema(description = "Password", defaultValue = "123456An@")
    private String password;
}
