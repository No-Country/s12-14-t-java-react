package com.trucking.service;

import com.trucking.dto.vehicle.VehicleDto;
import org.springframework.data.domain.Pageable;

import com.trucking.dto.pageable.PageableDto;
import com.trucking.dto.vehicle.response.VehicleResponseDto;
import org.springframework.data.domain.Page;


import java.util.List;

public interface VehicleService {

    List<VehicleDto> getAll();
    VehicleDto getVehicle(Long idVehicle);
    VehicleDto save(VehicleDto newVehicleDto);
    boolean delete(Long id);
    List<VehicleDto> getAllActive(Pageable pageable);
    List<VehicleDto> getAllInactive(Pageable pageable);
    Page<VehicleResponseDto> searchVehicleByCompany(String token, PageableDto pageableDto);

}
