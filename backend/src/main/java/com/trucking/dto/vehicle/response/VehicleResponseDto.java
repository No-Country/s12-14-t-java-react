package com.trucking.dto.vehicle.response;

import com.fasterxml.jackson.annotation.JsonRootName;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

/**
 * @author ROMULO
 * @package com.trucking.dto.vehicle.response
 * @license Lrpa, zephyr cygnus
 * @since 13/12/2023
 */
@JsonRootName("data")
public record VehicleResponseDto(
        Long id,
        String patent,
        String vehicleType,
        List<String> maintenance
)
implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
}
