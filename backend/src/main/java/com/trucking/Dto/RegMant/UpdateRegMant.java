package com.trucking.Dto.RegMant;

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
public class UpdateRegMant {

    @NotNull(message = "Date no puede ser null o estar vacio")
    private LocalDate date;

    @NotNull(message = "Responsable no puede ser null o estar vacio")
    private User responsable;

}
