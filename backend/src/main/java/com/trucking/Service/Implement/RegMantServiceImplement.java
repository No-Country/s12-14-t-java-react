package com.trucking.Service.Implement;

import com.trucking.Dto.RegMant.NewRegMantDto;
import com.trucking.Dto.RegMant.UpdateRegMant;
import com.trucking.Entity.RegMaint;
import com.trucking.Security.Repository.RegMantRepository;
import com.trucking.Service.RegMantService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RegMantServiceImplement implements RegMantService {
    private final RegMantRepository regMantRepository;
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
        newRegMaint.setManType(manTypeService.findByName(newRegMantDto.getManType()).get());
        newRegMaint.setCost(Double.valueOf(cost));

        //TODO: Adds regMant to vehicle when vehicle entity were ready.

        return regMantRepository.save(newRegMaint);
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
