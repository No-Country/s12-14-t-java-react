package com.trucking.Service;

import com.trucking.Dto.ManType.ManTypesDto;
import com.trucking.Entity.ManType;
import com.trucking.Entity.RegMaint;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ManTypeService {
    ManType save(ManTypesDto dto);
    ManType updateById(Long id, ManTypesDto dto);
    ManType findById(Long id);
    List<ManType> getAllManTypes();
    ManType deleteById(Long id);
}
