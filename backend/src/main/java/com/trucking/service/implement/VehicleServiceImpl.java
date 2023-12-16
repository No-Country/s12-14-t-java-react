
package com.trucking.service.implement;

import com.trucking.dto.pageable.PageableDto;
import com.trucking.dto.vehicle.VehicleDto;
import com.trucking.dto.vehicle.response.VehicleResponseDto;
import com.trucking.entity.Company;
import com.trucking.entity.Fuel;
import com.trucking.entity.Vehicle;
import com.trucking.entity.VehicleType;
import com.trucking.exception.GenericException;
import com.trucking.exception.NotFoundVehicle;
import com.trucking.mapper.VehicleMapper;
import com.trucking.mapper.mapstruct.VehicleMsMapper;
import com.trucking.repository.FuelRepository;
import com.trucking.repository.VehicleRepository;
import com.trucking.repository.VehicleTypeRepository;
import com.trucking.security.config.JwtService;
import com.trucking.security.entity.User;
import com.trucking.security.exception.ValidationIntegrity;
import com.trucking.security.repository.UserRepository;
import com.trucking.security.service.UserServiceImplement;
import com.trucking.service.VehicleService;
import com.trucking.util.Utility;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
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
    private final UserServiceImplement userServiceImplement;
    private final VehicleMsMapper vehicleMapperStruct;
    private final UserRepository userRepository;
    private final JwtService jwtService;

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
            LocalDate.parse(newVehicleDto.getDateVtv(), DateTimeFormatter.ISO_LOCAL_DATE);
        } catch (DateTimeParseException e) {
            throw new ValidationIntegrity("La fecha de la vtv no es valida");
        }

        Fuel actualFuel = fuelRepository.findByType(newVehicleDto.getFuelType())
                .orElseThrow(() -> new ValidationIntegrity("El tipo de combustible es invalido"));
        VehicleType actualVehicleType = vehicleTypeRepository.findByType(newVehicleDto.getVehicleType())
                .orElseThrow(() -> new ValidationIntegrity("El tipo de vehiculo no es valido"));

        Vehicle vehicle = vehicleMapper.toEntity(newVehicleDto);
        User user = getUserAuth();

        vehicle.setFuel(actualFuel);
        vehicle.setVehicleType(actualVehicleType);

        vehicle.setCompany(user.getCompany());

        return vehicleMapper.toDto(vehicleRepository.save(vehicle));
    }

    @Override
    public boolean delete(Long id) {
        Optional<Vehicle> oVehicle = vehicleRepository.findById(id);

        if (oVehicle.isEmpty()) {
            return false;
        }
        Company company = oVehicle.get().getCompany();
        if (company != null) {
            company.getVehicles().remove(oVehicle.get());
        }
        vehicleRepository.deleteById(id);
        return true;
    }

    @Override
    public List<VehicleDto> getAllActive(Pageable pageable) {
//        Pageable setPageable = Utility.setPageable(pageable);
        Page<Vehicle> vehiclePage = vehicleRepository.findByAvailableTrueAndCompanyNameOrderById(
                getUserAuth().getCompany().getName(),
                pageable);
        return vehicleMapper.toListDto(vehiclePage.stream().toList());
    }

    @Override
    public List<VehicleDto> getAllInactive(Pageable pageable) {
//        Pageable setPageable = Utility.setPageable(pageable);
        Page<Vehicle> vehiclePage = vehicleRepository.findByAvailableFalseAndCompanyNameOrderById(
                getUserAuth().getCompany().getName(),
                pageable);
        return vehicleMapper.toListDto(vehiclePage.stream().toList());
    }

    private User getUserAuth() {
        Authentication auth = SecurityContextHolder
                .getContext()
                .getAuthentication();
        if (auth != null && auth.getPrincipal() instanceof UserDetails userDetail) {
            return this.userServiceImplement.getUserByEmail(userDetail.getUsername());
        } else {
            throw new ValidationIntegrity("El usuario no existe");
        }
    }

    @Override
    public Page<VehicleResponseDto> searchVehicleByCompany(String token,PageableDto pageableDto) {
        String userEmail = jwtService.extractUsername(token);
        if (!StringUtils.hasText(userEmail))
            throw new GenericException("El token es invalido", HttpStatus.BAD_REQUEST);
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new GenericException("El usuario no existe", HttpStatus.NOT_FOUND));

        Pageable pageable = Utility.setPageable(pageableDto);
        Page<Vehicle> vehiclePage = vehicleRepository.searchVehicleByCompany(user.getCompany().getName(), pageable);
        if (vehiclePage.isEmpty()) throw new GenericException("No se encontraron vehiculos", HttpStatus.NOT_FOUND);
        List<VehicleResponseDto> vehicleResponseDtos = vehiclePage.getContent().stream()
                .map(vehicleMapperStruct::toVehicleDto)
                .toList();

        return new PageImpl<>(vehicleResponseDtos);
    }
}
