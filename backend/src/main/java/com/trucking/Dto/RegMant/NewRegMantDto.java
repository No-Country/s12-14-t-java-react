package com.trucking.Dto.RegMant;


import com.trucking.Entity.Vehicle;
import com.trucking.Security.Entity.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewRegMantDto {

    @NotBlank(message ="Vehiculo no puede estar vacio o ser null")
    private Vehicle vehicule;

    @NotNull(message = "Date no puede ser null ni estar vacio")
    private LocalDate date;

    @NotBlank(message = "Description no puede ser null ni estar vacio")
    private String description;

    @NotNull(message = "Responsable no puede ser null ni estar vacio")
    private User responsible;


}
