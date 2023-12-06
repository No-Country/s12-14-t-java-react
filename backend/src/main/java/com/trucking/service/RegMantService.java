package com.trucking.service;

import com.trucking.dto.regmant.NewRegMantDto;
import com.trucking.dto.regmant.UpdateRegMant;
import com.trucking.entity.RegMaint;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RegMantService {

    RegMaint save(NewRegMantDto newRegMantDto);
    RegMaint update(Long id, UpdateRegMant updateRegMant);
    RegMaint deleteById(Long id);
    RegMaint findById(Long id);
    List<RegMaint> getAllRegMaints();
}
