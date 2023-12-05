package com.trucking.Mapper;

import com.trucking.Dto.VehicleDto;
import com.trucking.Entity.Vehicle;
import com.trucking.Entity.Enum.VehicleType;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;


@Component
public class VehicleMapperImpl implements VehicleMapper{
    @Override
    public Vehicle toEntity(VehicleDto vehicleDto){
        return Vehicle.builder()
                .brand(vehicleDto.getBrand())
                .model(vehicleDto.getModel())
                .year(vehicleDto.getYear())
                .patent(vehicleDto.getPatent())
                .axle(vehicleDto.getAxle())
                .dateVtv(vehicleDto.getDateVtv())
                .vehicleType(VehicleType.valueOf(vehicleDto.getVehicleType().toUpperCase()))
                //.color(vehicleDto.getColor())
                //.km(vehicleDto.getKm())
                .motor(vehicleDto.getMotor())
                .chassis(vehicleDto.getChassis())
                .build();
    }

    @Override
    public VehicleDto toDto(Vehicle vehicleEntity) {
        return VehicleDto.builder()
                .id(vehicleEntity.getId())
                .brand(vehicleEntity.getBrand())
                .model(vehicleEntity.getModel())
                .year(vehicleEntity.getYear())
                .patent(vehicleEntity.getPatent())
                .axle(vehicleEntity.getAxle())
                .dateVtv(vehicleEntity.getDateVtv())
                .vehicleType(String.valueOf(vehicleEntity.getVehicleType()))
                .fuelType(vehicleEntity.getFuel().getType())
                //.color(vehicleEntity.getColor())
                //.km(vehicleEntity.getKm())
                .motor(vehicleEntity.getMotor())
                .chassis(vehicleEntity.getChassis())
                .build();
    }

    @Override
    public List<VehicleDto> toListDto(List<Vehicle> vehicleEntities) {
        return vehicleEntities.stream().map(this::toDto).collect(Collectors.toList());
    }
}
