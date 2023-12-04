package com.trucking.Service;

import com.trucking.Dto.RegMant.UpdateRegMant;
import com.trucking.Entity.ManType;
import com.trucking.Entity.RegMaint;
import com.trucking.Dto.RegMant.NewRegMantDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface RegMantService {

    RegMaint save(NewRegMantDto newRegMantDto);
    RegMaint update(Long id, UpdateRegMant updateRegMant);
    RegMaint deleteById(Long id);
    RegMaint findById(Long id);
    List<RegMaint> getAllRegMaints();
}
