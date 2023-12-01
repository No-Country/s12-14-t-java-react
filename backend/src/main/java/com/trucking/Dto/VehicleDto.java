package com.trucking.Dto;

import lombok.*;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VehicleDto {

    private Long id;
    private String brand;
    private String model;
    private Integer year;
    private String patent;
    private Integer axle;
    private String dateVtv;
    private String vehicleType;
    //private String color;
    //private Integer km;
    private String fuelType;
    private String motor;
    private String chassis;
}
