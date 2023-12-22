package com.trucking.service;

import com.trucking.dto.mantype.ManTypesDto;
import com.trucking.entity.ManType;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ManTypeService {
    ManType save(ManTypesDto dto);

    ManType updateById(Long id, ManTypesDto dto);

    ManType findById(Long id);

    List<ManType> getAllManTypes();

    ManType deleteById(Long id);

    Optional<ManType> findByName(String name);
}
