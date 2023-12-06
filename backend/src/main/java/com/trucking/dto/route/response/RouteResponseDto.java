package com.trucking.dto.route.response;

import com.trucking.entity.enums.RouteCategory;
import lombok.Getter;
import lombok.Setter;

/**
 * @author ROMULO
 * @package com.trucking.dto.route.response
 * @license Lrpa, zephyr cygnus
 * @since 5/12/2023
 */
@Getter
@Setter
public class RouteResponseDto {
    private String category;
    private String image;

}
