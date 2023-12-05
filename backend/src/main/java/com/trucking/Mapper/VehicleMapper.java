package com.trucking.Mapper;

import com.trucking.Dto.VehicleDto;
import com.trucking.Entity.Vehicle;
import jakarta.validation.constraints.NotNull;
import org.springframework.validation.annotation.Validated;

import java.text.ParseException;
import java.util.List;

@Validated
public interface VehicleMapper {
    Vehicle toEntity(@NotNull VehicleDto vehicleDto);
    VehicleDto toDto(@NotNull Vehicle vehicleEntity);
    List<VehicleDto> toListDto(List<Vehicle> vehicleEntities);
}
