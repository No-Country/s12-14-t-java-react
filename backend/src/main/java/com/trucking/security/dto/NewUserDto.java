package com.trucking.security.dto;

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
    @Column(name = "company_name")
    @NotBlank(message = "Company name can't be null or empty")
    @Pattern(regexp = "^[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{|}]{2,20}$", message = "The company name is invalid")
    @Schema(description = "Company name", example = "Vehicle org")
    private String companyName;

    /**
     * Nombre del nuevo usuario.
     */
    @NotBlank(message = "Name can't be null or empty")
    @NotEmpty
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,20}$", message = "The name is invalid")
    @Schema(description = "name user", example = "Maria angela")
    private String name;

    /**
     * Apellido del nuevo usuario.
     */
    @Column(name = "last_name")
    @NotBlank(message = "last name can't be null or empty")
    @NotEmpty
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,20}$", message = "The last name is invalid")
    @Schema(description = "last name user", example = "Peña")
    private String lastName;

    /**
     * Correo electrónico del nuevo usuario.
     */
    @NotBlank(message = "Email can't be null or empty")
    @NotEmpty
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "The email is invalid")
    @Email
    @Schema(description = "Email user", example = "mangela@example.com")
    private String email;

    /**
     * Contraseña del nuevo usuario.
     */
    @NotBlank(message = "Password can't be null or empty")
    @NotEmpty
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]{8,12}$",
            message = "The password must be between 8 and 12 characters and have at least one uppercase letter, one lowercase letter, one number, and one special character.")
    @Schema(description = "Password", defaultValue = "123456An@")
    private String password;
}
