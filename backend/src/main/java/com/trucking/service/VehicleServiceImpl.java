package com.trucking.service;

import com.trucking.dto.VehicleDto;
import com.trucking.entity.Fuel;
import com.trucking.entity.Vehicle;
import com.trucking.exception.NotFoundVehicle;
import com.trucking.mapper.VehicleMapper;
import com.trucking.repository.FuelRepository;
import com.trucking.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepository vehicleRepository;
    private final VehicleMapper vehicleMapper;
    private final FuelRepository fuelRepository;

    @Override
    public List<VehicleDto> getAll() {
        return vehicleMapper.toListDto(vehicleRepository.findAll());
    }

    @Override
    public VehicleDto getVehicle(Long idVehicle) {
        return vehicleRepository.findById(idVehicle)
                .map(vehicleMapper::toDto)
                .orElseThrow(NotFoundVehicle::new);
    }

    @Override
    public VehicleDto save(VehicleDto newVehicleDto) {

        if (Objects.isNull(newVehicleDto))
            throw new RuntimeException("El Vehiculo no puede ser nulo.");

        Vehicle vehicle = vehicleMapper.toEntity(newVehicleDto);

        // Verificar si existe el tipo de combustible en la base de datos
        Optional<Fuel> existingFuel = fuelRepository.findByType(newVehicleDto.getFuelType());

        // Crear una nueva entidad Fuel o utilizar la existente
        Fuel fuel = existingFuel.orElseGet(() -> Fuel.builder()
                .price(null)
                .type(newVehicleDto.getFuelType())
                .build());

        fuelRepository.save(fuel);
        vehicle.setFuel(fuel);

        return vehicleMapper.toDto(vehicleRepository.save(vehicle));
    }
}
