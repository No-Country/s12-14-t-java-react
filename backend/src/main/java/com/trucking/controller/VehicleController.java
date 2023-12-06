package com.trucking.controller;

import com.trucking.dto.VehicleDto;
import com.trucking.service.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicle")
@RequiredArgsConstructor
public class VehicleController {

    private final VehicleService vehicleService;

    @GetMapping(value = "/getAll")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleDto> getAll(){
        return vehicleService.getAll();
    }
    @GetMapping(value = "/{idVehicle}")
    @ResponseStatus(HttpStatus.OK)
    public VehicleDto getVehicle(@PathVariable Long idVehicle){
        return vehicleService.getVehicle(idVehicle);
    }
    @PostMapping(value = "/save")
    @ResponseStatus(HttpStatus.CREATED)
    public VehicleDto saveVehicle(@RequestBody VehicleDto newVehicleDto){
        return vehicleService.save(newVehicleDto);
    }
}
