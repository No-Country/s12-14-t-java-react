package com.trucking.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VehicleDto {

    private Long id;

    @NotBlank(message = "La marca es obligatoria")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\s ]{2,20}$|^$", message = "La marca no es válida")
    private String brand;

    @NotBlank(message = "El modelo es obligatorio")
    @Pattern(regexp = "^[a-zA-Z0-9]{3,15}$|^$", message = "El modelo no es válido")
    private String model;

    @NotBlank(message = "La marca es obligatoria")
    @Pattern(regexp = "^[a-zA-Z0-9]{3,15}$|^$", message = "La marca no es válido")
    private String year;

    @NotBlank(message = "La patente es obligatoria")
    @Pattern(regexp = "^[a-zA-Z0-9]{6,7}$|^$", message = "La patente no es válida")
    private String patent;

    @NotBlank(message = "La cantidad de ejes es obligatoria")
    private String axle;

    @NotNull(message = "La fecha de la VTV es obligatoria")
    private String dateVtv;

    @NotBlank(message = "El tipo de vehiculo es obligatorio")
    private String vehicleType;
    @NotBlank(message = "El tipo de combustible es obligatorio")
    private String fuelType;

    @NotBlank(message = "La marca del motor es obligatoria")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\s ]{2,20}$|^$", message = "La marca del motor no es válida")
    private String brandMotor;

    @NotBlank(message = "El numero de motor es obligatorio")
    @Pattern(regexp = "^[a-zA-Z0-9]{9}$|^$", message = "El numero de motor no es válida")
    private String numberMotor;

    @NotBlank(message = "La marca del chasis es obligatorio")
    @Pattern(regexp = "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\\s ]{2,20}$|^$", message = "La marca del chasis no es válida")
    private String brandChassis;

    @NotBlank(message = "El numero de chasis es obligatorio")
    @Pattern(regexp = "^[a-zA-Z0-9]{17}$|^$", message = "El numero del chasis no es válida")
    private String numberChassis;
}
