package com.trucking.Service.Implement;

import com.trucking.Dto.ManType.ManTypesDto;
import com.trucking.Entity.ManType;
import com.trucking.Repository.ManTypeRepository;
import com.trucking.Service.ManTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ManTypeServiceImplement implements ManTypeService {

    private final ManTypeRepository manTypeRepository;

    @Override
    public ManType save(ManTypesDto dto) {
        ManType newType = new ManType();
        newType.setName(dto.getName());
        manTypeRepository.save(newType);
        return newType;
    }

    @Override
    public ManType updateById(Long id, ManTypesDto dto) {
        ManType typeById = manTypeRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Error al encontrar el mantenimieto con el id " + id));
        if(typeById != null) {
            typeById.setName(dto.getName());
            manTypeRepository.save(typeById);
        }
        return typeById;
    }

    @Override
    public ManType findById(Long id) {
        return manTypeRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Error al encontrar el mantenimieto con el id " + id));
    }

    @Override
    public List<ManType> getAllManTypes() {
        return manTypeRepository.findAll();
    }

    @Override
    public ManType deleteById(Long id) {

        ManType typeById = manTypeRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Error al encontrar el mantenimieto con el id " + id));
        manTypeRepository.deleteById(id);
        return typeById;
    }

    @Override
    public Optional<ManType> findByName(String name) {
        return manTypeRepository.findByName(name);
    }
}
