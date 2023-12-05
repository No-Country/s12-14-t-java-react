package com.trucking.Service;

import com.trucking.Dto.VehicleDto;
import com.trucking.Entity.Company;
import com.trucking.Entity.Fuel;
import com.trucking.Entity.Vehicle;
import com.trucking.Exception.NotFoundVehicle;
import com.trucking.Mapper.VehicleMapper;
import com.trucking.Repository.FuelRepository;
import com.trucking.Repository.VehicleRepository;
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

    @Override
    public boolean delete(Long id) {
        if(vehicleRepository.findById(id).isEmpty()){
            return false;
        }
        vehicleRepository.deleteById(id);
        return true;
    }
}
