package com.trucking.mapper.mapstruct;

import com.trucking.dto.vehicle.response.VehicleResponseDto;
import com.trucking.entity.RegMaint;
import com.trucking.entity.Vehicle;
import org.mapstruct.*;

/**
 * @author ROMULO
 * @package com.trucking.mapper.mapstruct
 * @license Lrpa, zephyr cygnus
 * @since 13/12/2023
 */
@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE,componentModel = MappingConstants.ComponentModel.SPRING, injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface VehicleMsMapper {

    @Mapping(target = "vehicleType", source = "vehicleType.type")
    @Mapping(target = "maintenance", source = "maintenance", qualifiedByName = "map")
    VehicleResponseDto toVehicleDto(Vehicle vehicle);

    @Named("map")
    default String map(RegMaint regMaint) {
        return regMaint.getManType();
    }


}
