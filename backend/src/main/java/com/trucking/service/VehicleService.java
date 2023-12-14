package com.trucking.service;

import com.trucking.dto.VehicleDto;
import com.trucking.dto.pageable.PageableDto;
import com.trucking.dto.vehicle.response.VehicleResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.Optional;

public interface VehicleService {

    List<VehicleDto> getAll();
    VehicleDto getVehicle(Long idVehicle);
    VehicleDto save(VehicleDto newVehicleDto);
    boolean delete(Long id);
    List<VehicleDto> getAllActive(PageableDto pageable);
    List<VehicleDto> getAllInactive(PageableDto pageable);
    Page<VehicleResponseDto> searchVehicleByCompany(String name, PageableDto pageableDto);
}
