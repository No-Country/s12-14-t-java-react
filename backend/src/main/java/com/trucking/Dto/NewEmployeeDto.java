package com.trucking.Dto;

import com.trucking.Entity.Enum.RoleEmployee;
import com.trucking.Security.Entity.RoleName;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class NewEmployeeDto {


    /**
     * Nombre del nuevo empleado.
     */
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,20}$", message = "Name is invalid")
    @Schema(description = "name employee", example = "Maria angela")
    private String name;

    /**
     * Apellido del nuevo empleado.
     */
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,20}$", message = "Last name is invalid")
    @Schema(description = "last name user", example = "Peña")
    private String lastName;

    /**
     * Correo electrónico del nuevo empleado.
     */

    @Email
    @Schema(description = "Email employee", example = "a@b.com")
    private String email;
    /**
     * Rol del nuevo empleado.
     */
    @NotNull(message = "role is required")
    @Enumerated
    @Schema(description = "Rol employee" , example = "OWNER")
    private RoleEmployee role;

}
