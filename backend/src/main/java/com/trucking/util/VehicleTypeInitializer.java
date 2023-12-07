package com.trucking.util;

import com.trucking.entity.VehicleType;
import com.trucking.repository.VehicleTypeRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class VehicleTypeInitializer {
    private final VehicleTypeRepository vehicleTypeRepository;
    @PostConstruct
    public void initializeData(){
        System.out.println("Inicializando tipos de vehiculo");
        for (DefaultVehicleTypes type: DefaultVehicleTypes.values()){
            if (vehicleTypeRepository.findByType(type.displayName()).isEmpty()){
                vehicleTypeRepository.save(new VehicleType(null, type.displayName(), null));
            }
        }
    }
}
