package com.trucking.Security.Dto;

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
    @Pattern(regexp = "^[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{|}]{2,20}$", message = "El nombre de la compañia no es valido")
    private String companyName;

    /**
     * Nombre del nuevo usuario.
     */
    @NotBlank(message = "Nombre no puede ser nulo o vacio") @NotEmpty
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,20}$", message = "El nombre no es valido")
    private String name;

    /**
     * Apellido del nuevo usuario.
     */
    @Column(name = "last_name")
    @NotBlank(message = "Apellido no puede ser nulo o vacio") @NotEmpty
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,20}$", message = "El apellido no es valido")
    private String lastName;

    /**
     * Correo electrónico del nuevo usuario.
     */
    @NotBlank(message = "Email no puede ser nulo o vacio") @NotEmpty
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "El email no es valido")
    @Email
    private String email;

    /**
     * Contraseña del nuevo usuario.
     */
    @NotBlank(message = "Password no puede ser nulo o vacio") @NotEmpty
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!#$%&()*+\\-/?@\\[\\]^_{\\\\|}])[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{\\\\|}]{8,12}$",
            message = "La contraseña debe tener entre 8 y 12 caracteres y una letra mayúscula, una minúscula, un número y un caracter especial.")
    private String password;
}
