package com.trucking.dto.employee;

import com.trucking.entity.Company;
import com.trucking.security.entity.RoleName;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewEmployee {

    @NotBlank(message = "El nombre es obligatorio")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,50}$|^$", message = "El nombre no es válido")
    private String name;
    @NotBlank(message = "El nombre es obligatorio")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,50}$|^$", message = "El nombre no es válido")
    private String lastName;
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", message = "El correo electrónico no es válido")
    @NotBlank(message = "El correo electrónico es obligatorio")
    @Email
    private String email;
    @NotBlank(message = "La contraseña es obligatoria")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!#$%&()*+\\-/?@\\[\\]^_{\\\\|}])[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{\\\\|}]{8,12}$|^$",
            message = "La contraseña debe tener entre 8 y 12 caracteres y tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.")
    private String password;
    @NotNull (message = "El nombre de la empresa es obligatorio")
    @Pattern(regexp = "^[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{|} ]{2,50}$|^$", message = "El nombre de la empresa no es válido")
    private Company company;
    @NotNull (message = "El rol del empleado es obligatorio")
    private RoleName roleName;
    @NotNull (message = "La foto del empleado es obligatorio")
    private String photo;
}
