package com.trucking.service.implement;


import com.trucking.dto.regmant.NewRegMantDto;
import com.trucking.dto.regmant.UpdateRegMant;
import com.trucking.entity.RegMaint;
import com.trucking.entity.Vehicle;
import com.trucking.exception.NotFoundVehicle;
import com.trucking.repository.VehicleRepository;
import com.trucking.security.dto.MsgDto;
import com.trucking.security.repository.RegMantRepository;
import com.trucking.service.RegMantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RegMantServiceImplement implements RegMantService {
    private final RegMantRepository regMantRepository;
    private final VehicleRepository vehicleRepository;
    private final ManTypeServiceImplement manTypeService;

    @Override
    public RegMaint save(NewRegMantDto newRegMantDto) {

        String cost = newRegMantDto.getCost();
        cost = cost.replace(".", "");
        cost = cost.replace(",", ".");

        RegMaint newRegMaint = new RegMaint();
        newRegMaint.setDate(newRegMantDto.getDate());
        newRegMaint.setDescription(newRegMantDto.getDescription());
        newRegMaint.setKm(Integer.valueOf(newRegMantDto.getKm()));
        newRegMaint.setManType(newRegMaint.getManType());
        newRegMaint.setCost(Double.valueOf(cost));

        RegMaint regMaint = regMantRepository.save(newRegMaint);
        Vehicle actualVehicle = vehicleRepository.findById(newRegMantDto.getVehicle()).orElseThrow(NotFoundVehicle::new);
        actualVehicle.getMaintenance().add(regMaint);
        vehicleRepository.save(actualVehicle);

        return regMaint;
    }

    @Override
    public RegMaint update(Long id, UpdateRegMant updateRegMant) {
        RegMaint regById = regMantRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Registro de mantenimiento " +
                "no encontrado con el id: " + id));
        if (regById != null) {
            regById.setDate(updateRegMant.getDate());
            regById.setBill(updateRegMant.getBill());
            regById.setKm(updateRegMant.getKm());
            regById.setCost(updateRegMant.getCost());
        }
        return regById;
    }

    @Override
    public RegMaint deleteById(Long id) {
        RegMaint regById = regMantRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Registro de mantenimiento " +
                "no encontrado con el id: " + id));
        if (regById != null) regMantRepository.deleteById(id);
        return regById;
    }

    @Override
    public RegMaint findById(Long id) {
        RegMaint regById = regMantRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Registro de mantenimiento " +
                "no encontrado con el id: " + id));
        return regById;
    }

    @Override
    public List<RegMaint> getAllRegMaints() {
        return regMantRepository.findAll();
    }

    @Override
    public List<RegMaint> getAllByVehicle(Long idVehicle) {

        if(vehicleRepository.findById(idVehicle).isEmpty()){throw new NotFoundVehicle();}
        return vehicleRepository.findById(idVehicle).get().getMaintenance();
    }
}
