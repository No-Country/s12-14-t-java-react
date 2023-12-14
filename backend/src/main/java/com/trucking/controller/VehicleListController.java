package com.trucking.controller;

import com.trucking.dto.VehicleDto;
import com.trucking.security.dto.MsgDto;
import com.trucking.security.exception.ValidationIntegrity;
import com.trucking.service.VehicleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/list/vehicle")
@RequiredArgsConstructor
public class VehicleListController {

    private final VehicleService vehicleService;

    @GetMapping(value = "/getAllActive")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleDto> getVehicleActive(@ParameterObject Pageable pageable){
        return vehicleService.getAllActive(pageable);
    }
    @GetMapping(value = "/getAllInactive")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleDto> getVehicleInactive(@ParameterObject Pageable pageable){
        return vehicleService.getAllInactive(pageable);
    }
}
