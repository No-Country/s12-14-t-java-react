package com.trucking.Controller;

import com.trucking.Dto.VehicleDto;
import com.trucking.Security.Dto.MsgDto;
import com.trucking.Security.HandlerError.ValidationIntegrity;
import com.trucking.Service.VehicleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
