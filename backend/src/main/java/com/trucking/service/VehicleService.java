package com.trucking.service;

import com.trucking.dto.VehicleDto;

import java.util.List;

public interface VehicleService {

    List<VehicleDto> getAll();
    VehicleDto getVehicle(Long idVehicle);
    VehicleDto save(VehicleDto newVehicleDto);

}
