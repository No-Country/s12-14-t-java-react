package com.trucking.Dto.RegMant;


import com.trucking.Entity.ManType;
import com.trucking.Entity.Vehicle;
import com.trucking.Security.Entity.User;
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

    @NotBlank(message = "Description no puede ser null ni estar vacio")
    private String description;

    @NotNull(message ="Vehiculo no puede estar vacio o ser null")
    private Long vehicle;

    @NotNull(message ="El kilometraje es obligatorio")
    @Pattern(regexp = "^[0-9]{1,6}$", message = "El kilometraje no es válido")
    private String km;

    @NotNull(message = "ManType no puede ser null ni estar vacio")
    private String manType;

    @NotNull(message = "Bill no puede ser null ni estar vacio")
    private String bill;

    @NotNull
    @Pattern(regexp = "^[0-9,.]{1,10}$", message = "El monto ingresado no es válido")
    private String cost;
}
