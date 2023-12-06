package com.trucking.mapper;

import lombok.SneakyThrows;
import com.trucking.dto.VehicleDto;
import com.trucking.entity.Vehicle;
import com.trucking.entity.enums.VehicleType;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;


@Component
public class VehicleMapperImpl implements VehicleMapper{
    @SneakyThrows
    @Override
    public Vehicle toEntity(VehicleDto vehicleDto){

        return Vehicle.builder()
                .brand(vehicleDto.getBrand())
                .model(vehicleDto.getModel())
                .year(Integer.parseInt(vehicleDto.getYear()))
                .patent(vehicleDto.getPatent())
                .axle(Integer.parseInt(vehicleDto.getAxle()))
                .dateVtv(LocalDate.parse(vehicleDto.getDateVtv(),DateTimeFormatter.ISO_LOCAL_DATE))
                .vehicleType(VehicleType.valueOf(vehicleDto.getVehicleType().toUpperCase()))
                .brandMotor(vehicleDto.getBrandMotor())
                .numberMotor(vehicleDto.getNumberMotor())
                .brandChassis(vehicleDto.getBrandChassis())
                .numberChassis(vehicleDto.getNumberChassis())
                .build();
    }

    @Override
    public VehicleDto toDto(Vehicle vehicleEntity) {
        return VehicleDto.builder()
                .id(vehicleEntity.getId())
                .brand(vehicleEntity.getBrand())
                .model(vehicleEntity.getModel())
                .year(String.valueOf(vehicleEntity.getYear()))
                .patent(vehicleEntity.getPatent())
                .axle(String.valueOf(vehicleEntity.getAxle()))
                .dateVtv(String.valueOf(vehicleEntity.getDateVtv()))
                .vehicleType(String.valueOf(vehicleEntity.getVehicleType()))
                .fuelType(vehicleEntity.getFuel().getType())
                .brandMotor(vehicleEntity.getBrandMotor())
                .numberMotor(vehicleEntity.getNumberMotor())
                .brandChassis(vehicleEntity.getBrandChassis())
                .numberChassis(vehicleEntity.getNumberChassis())
                .build();
    }

    @Override
    public List<VehicleDto> toListDto(List<Vehicle> vehicleEntities) {
        return vehicleEntities.stream().map(this::toDto).collect(Collectors.toList());
    }
}
