package com.trucking.dto.mantype;

import com.trucking.entity.ManType;
import com.trucking.repository.ManTypeRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ManTypeInitializer {

    private final ManTypeRepository manTypeRepository;

    @PostConstruct
    public void initializeData(){
        if(manTypeRepository.findAll().size() == 0){
            addDefaultTypes();
        }
    }

    private void addDefaultTypes() {
        String [] defaultTypes = {
                "Cambio de Aceite y Filtro",
                "Rotación de Neumáticos",
                "Frenos y Sistema de Frenado",
                "Alineación de Ruedas",
                "Cambio de Batería",
                "Inspección y Reemplazo del Sistema de Escap",
                "Mantenimiento del Sistema de Refrigeración",
                "Mantenimiento de la Transmisión",
                "Inspección y Reemplazo de Filtros",
                "Mantenimiento del Sistema de Suspensión",
        };

        for(String nameType : defaultTypes){
            ManType manType = new ManType();
            manType.setName(nameType);
            manTypeRepository.save(manType);
        }
    }

}
