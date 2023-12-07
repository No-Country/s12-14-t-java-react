package com.trucking.service;

import com.trucking.dto.VehicleDto;
import com.trucking.entity.Fuel;
import com.trucking.entity.Vehicle;
import com.trucking.entity.VehicleType;
import com.trucking.exception.NotFoundVehicle;
import com.trucking.mapper.VehicleMapper;
import com.trucking.repository.FuelRepository;
import com.trucking.repository.VehicleRepository;
import com.trucking.repository.VehicleTypeRepository;
import com.trucking.security.exception.ValidationIntegrity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.format.DateTimeParseException;
import java.time.temporal.ChronoField;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepository vehicleRepository;
    private final VehicleMapper vehicleMapper;
    private final FuelRepository fuelRepository;
    private final VehicleTypeRepository vehicleTypeRepository;

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
            throw new ValidationIntegrity("El Vehiculo no puede ser nulo.");

        try {
            LocalDate.parse(newVehicleDto.getDateVtv(),DateTimeFormatter.ISO_LOCAL_DATE);
        } catch (DateTimeParseException e) {
            throw new ValidationIntegrity("La fecha de la vtv no es valida");
        }

        Fuel actualFuel = fuelRepository.findByType(newVehicleDto.getFuelType())
                .orElseThrow(() -> new ValidationIntegrity("El tipo de combustible es invalido"));
        VehicleType actualVehicleType = vehicleTypeRepository.findByType(newVehicleDto.getVehicleType())
                .orElseThrow(() -> new ValidationIntegrity("El tipo de vehiculo no es valido"));

        Vehicle vehicle = vehicleMapper.toEntity(newVehicleDto);

        vehicle.setFuel(actualFuel);
        vehicle.setVehicleType(actualVehicleType);

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
