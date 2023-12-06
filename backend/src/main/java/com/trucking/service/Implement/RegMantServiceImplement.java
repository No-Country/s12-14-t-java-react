package com.trucking.service.implement;

<<<<<<< HEAD:backend/src/main/java/com/trucking/service/Implement/RegMantServiceImplement.java
import com.trucking.dto.regmant.NewRegMantDto;
import com.trucking.dto.regmant.UpdateRegMant;
import com.trucking.entity.RegMaint;
import com.trucking.security.repository.RegMantRepository;
import com.trucking.service.RegMantService;
=======
import com.trucking.Dto.RegMant.NewRegMantDto;
import com.trucking.Dto.RegMant.UpdateRegMant;
import com.trucking.Entity.RegMaint;
import com.trucking.Entity.Vehicle;
import com.trucking.Exception.ManTypeNotFound;
import com.trucking.Exception.NotFoundVehicle;
import com.trucking.Repository.VehicleRepository;
import com.trucking.Security.Repository.RegMantRepository;
import com.trucking.Service.RegMantService;
>>>>>>> 868d811796f940104dd4a6d6179a6f3371aabae1:backend/src/main/java/com/trucking/Service/Implement/RegMantServiceImplement.java
import lombok.RequiredArgsConstructor;
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
        cost = cost.replace(",",".");

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
                "no encontrado con el id: "+ id));
        if(regById != null){
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
                "no encontrado con el id: "+ id));
        if(regById != null) regMantRepository.deleteById(id);
        return regById;
    }

    @Override
    public RegMaint findById(Long id) {
        RegMaint regById = regMantRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Registro de mantenimiento " +
                "no encontrado con el id: "+ id));
        return regById;
    }

    @Override
    public List<RegMaint> getAllRegMaints() {
        return regMantRepository.findAll();
    }

}
