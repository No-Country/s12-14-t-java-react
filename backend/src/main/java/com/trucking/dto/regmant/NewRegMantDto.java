package com.trucking.dto.regmant;


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
public class NewRegMantDto {

    @NotNull(message = "Date no puede ser null ni estar vacio")
    private LocalDate date;

    @Pattern(regexp = "^[a-zA-Z0-9!#$%&()*+\\-/?@\\[\\]^_{\\\\| }]{2,2000}$|^$",message = "La descripción no es válida")
    private String description;

    @NotNull(message ="El id del vehiculo es obligatorio")
    private Long vehicle;

    @NotBlank(message ="El kilometraje es obligatorio")
    @Pattern(regexp = "^[0-9]{1,6}$|^$", message = "El kilometraje no es válido")
    private String km;

    @NotBlank(message = "Tipo de mantenimiento es obligatorio")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\- ]{2,40}$|^$", message = "El tipo de mantenimiento no es válido")
    private String manType;

    private String bill;

    @NotBlank(message = "El costo es obligatorio")
    @Pattern(regexp = "^[0-9,.]{1,10}$", message = "El monto ingresado no es válido")
    private String cost;
}
