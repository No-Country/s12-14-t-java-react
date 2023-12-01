package com.trucking.Service.Implement;

import com.trucking.Dto.RegMant.NewRegMantDto;
import com.trucking.Dto.RegMant.UpdateRegMant;
import com.trucking.Entity.RegMaint;
import com.trucking.Security.Repository.RegMantRepository;
import com.trucking.Service.RegMantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RegMantServiceImplement implements RegMantService {
    private final RegMantRepository regMantRepository;
    @Override
    public RegMaint save(NewRegMantDto newRegMantDto) {
        RegMaint newRegMaint = new RegMaint();
        newRegMaint.setVehicle(newRegMantDto.getVehicule());
        newRegMaint.setDate(newRegMantDto.getDate());
        newRegMaint.setDescription(newRegMantDto.getDescription());
        newRegMaint.setResponsible(newRegMantDto.getResponsible());
        return newRegMaint;
    }

    @Override
    public RegMaint update(Long id, UpdateRegMant updateRegMant) {
        RegMaint regById = regMantRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Registro de mantenimiento " +
                "no encontrado con el id: "+ id));
        if(regById != null){
            regById.setDate(updateRegMant.getDate());
            regById.setResponsible(updateRegMant.getResponsable());
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
