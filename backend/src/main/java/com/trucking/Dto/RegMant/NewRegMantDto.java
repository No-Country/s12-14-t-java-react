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
    private Vehicle vehicule;

    @NotBlank(message ="Km no puede ser alfabetico, vacio o null")
    @Pattern(regexp = "^.{2,}$")
    private Integer km;

    @NotNull(message = "ManType no puede ser null ni estar vacio")
    private ManType manType;

    @NotNull(message = "Bill no puede ser null ni estar vacio")
    private byte[] bill;

}
