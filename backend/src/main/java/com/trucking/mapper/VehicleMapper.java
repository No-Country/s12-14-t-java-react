package com.trucking.mapper;

import com.trucking.dto.vehicle.VehicleDto;
import com.trucking.entity.Vehicle;
import jakarta.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Validated
public interface VehicleMapper {
    Vehicle toEntity(@NotNull VehicleDto vehicleDto);
    VehicleDto toDto(@NotNull Vehicle vehicleEntity);
    List<VehicleDto> toListDto(List<Vehicle> vehicleEntities);
}
