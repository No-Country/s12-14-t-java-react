package com.trucking.Service;

import com.trucking.Dto.VehicleDto;

import java.util.List;
import java.util.Optional;

public interface VehicleService {

    List<VehicleDto> getAll();
    VehicleDto getVehicle(Long idVehicle);
    VehicleDto save(VehicleDto newVehicleDto);

}
