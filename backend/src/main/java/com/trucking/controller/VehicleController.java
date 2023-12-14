package com.trucking.controller;

import com.trucking.dto.VehicleDto;
import com.trucking.dto.pageable.PageableDto;
import com.trucking.dto.vehicle.response.VehicleResponseDto;
import com.trucking.security.dto.MsgDto;
import com.trucking.security.exception.ValidationIntegrity;
import com.trucking.service.VehicleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
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
    @GetMapping(value = "/getAllActive")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleDto> getVehicleActive(PageableDto pageableDto){
        return vehicleService.getAllActive(pageableDto);
    }
    @GetMapping(value = "/getAllInactive")
    @ResponseStatus(HttpStatus.OK)
    public List<VehicleDto> getVehicleInactive(PageableDto pageableDto){
        return vehicleService.getAllInactive(pageableDto);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(this.vehicleService.delete(id) ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/search")
    public ResponseEntity<Page<VehicleResponseDto>> getAllMaintenance(@RequestParam String nameCompany, PageableDto pageableDto){
        return new ResponseEntity<>(vehicleService.searchVehicleByCompany(nameCompany,pageableDto), HttpStatus.OK);
    }
}
