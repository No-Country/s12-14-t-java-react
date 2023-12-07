package com.trucking.service;

import com.trucking.dto.VehicleDto;

import java.util.List;
import java.util.Optional;

public interface VehicleService {

    List<VehicleDto> getAll();
    VehicleDto getVehicle(Long idVehicle);
    VehicleDto save(VehicleDto newVehicleDto);
    boolean delete(Long id);
}
