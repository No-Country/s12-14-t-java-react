package com.trucking.dto.employee;

import com.trucking.entity.Company;
import com.trucking.security.entity.RoleName;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class DataNewEmployee {

    @NotBlank(message = "El nombre es obligatorio")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,50}$|^$", message = "El nombre no es válido")
    private String name;
    @NotBlank(message = "El apellido es obligatorio")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,50}$|^$", message = "El apellido no es válido")
    private String lastName;
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "El correo electrónico no es válido")
    @NotBlank(message = "El correo electrónico es obligatorio")
    @Email
    private String email;
    @NotNull (message = "El rol del empleado es obligatorio")
    private RoleName roleName;
    @NotBlank(message = "La foto del empleado es obligatoria")
    private String photo;
}