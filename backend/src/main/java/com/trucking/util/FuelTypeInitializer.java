package com.trucking.util;

import com.trucking.entity.Fuel;
import com.trucking.repository.FuelRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class FuelTypeInitializer {
    private final FuelRepository fuelRepository;
    @PostConstruct
    public void initializeData(){
        System.out.println("Inicializando combustibles");
        for (DefaultFuelTypes fuel: DefaultFuelTypes.values()){
            if (fuelRepository.findByType(fuel.displayName()).isEmpty()){
                fuelRepository.save(new Fuel(null, fuel.displayName(), null));
            }
        }
    }
}
