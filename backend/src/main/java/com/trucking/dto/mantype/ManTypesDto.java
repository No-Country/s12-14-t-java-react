package com.trucking.dto.mantype;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ManTypesDto {
    @NotBlank(message = "Name no puede estar vacia o ser null")
    private String name;


}
