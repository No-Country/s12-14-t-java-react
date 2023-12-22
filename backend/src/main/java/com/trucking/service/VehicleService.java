package com.trucking.service;

import com.trucking.dto.vehicle.VehicleDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface VehicleService {

    List<VehicleDto> getAll();
    VehicleDto getVehicle(Long idVehicle);
    VehicleDto save(VehicleDto newVehicleDto);
    boolean delete(Long id);
    VehicleDto inactiveVehicle(Long id, String reason);
    VehicleDto activeVehicle(Long id);
    List<VehicleDto> getAllActive(Pageable pageable);
    List<VehicleDto> getAllInactive(Pageable pageable);
}
