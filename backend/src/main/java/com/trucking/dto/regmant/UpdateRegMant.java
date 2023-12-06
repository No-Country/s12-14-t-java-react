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
public class UpdateRegMant {

    @NotNull(message = "Date no puede ser null o estar vacio")
    private LocalDate date;

    @NotNull(message = "Bill no puede ser null ni estar vacio")
    private String bill;

    @NotBlank(message ="Km no puede ser alfabetico, vacio o null")
    @Pattern(regexp = "^.{2,}$")
    private Integer km;

    @NotNull(message = "Cost no puede ser null ni estar vacio")
    private Double cost;

}
