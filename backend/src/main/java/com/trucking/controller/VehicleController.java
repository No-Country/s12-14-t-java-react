package com.trucking.controller;

import com.trucking.dto.VehicleDto;
import com.trucking.security.dto.MsgDto;
import com.trucking.security.exception.ValidationIntegrity;
import com.trucking.service.VehicleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> saveVehicle(@Valid @RequestBody VehicleDto newVehicleDto){
        try {
            return new ResponseEntity<>(vehicleService.save(newVehicleDto), HttpStatus.OK);
        } catch (ValidationIntegrity e) {
            return new ResponseEntity<>(new MsgDto(e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(this.vehicleService.delete(id) ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }
}
