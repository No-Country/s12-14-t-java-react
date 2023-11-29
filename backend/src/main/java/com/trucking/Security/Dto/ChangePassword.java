package com.trucking.Security.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChangePassword {
    @NotBlank(message = "La contraseña1 no debe ser null o vacia")
    private String password1;
    @NotBlank(message = "La contraseña2 no debe ser null o vacia")
    private String password2;
    @NotBlank(message = "La url no debe ser null o vacia")
    private String url;

}
