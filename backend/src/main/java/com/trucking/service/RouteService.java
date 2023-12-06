package com.trucking.service;

import com.trucking.dto.pageable.PageableDto;
import com.trucking.dto.route.request.RouteRequestDto;
import com.trucking.dto.route.response.RouteResponseDto;
import com.trucking.service.generic.ApiCrudGeneric;

/**
 * @author ROMULO
 * @package com.trucking.service
 * @license Lrpa, zephyr cygnus
 * @since 4/12/2023
 */
public interface RouteService extends ApiCrudGeneric<RouteRequestDto, RouteResponseDto, PageableDto,Long> {
}
