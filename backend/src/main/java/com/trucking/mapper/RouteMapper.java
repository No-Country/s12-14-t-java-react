package com.trucking.mapper;

import com.trucking.dto.route.request.RouteRequestDto;
import com.trucking.dto.route.response.RouteResponseDto;
import com.trucking.entity.Route;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING, injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface RouteMapper {

    @Mapping(target = "category", expression = "java(com.trucking.entity.enums.RouteCategory.valueOf(routeRequestDto.category()))")
    Route toEntity(RouteRequestDto routeRequestDto);
    @Mapping(target = "category", expression = "java(route.getCategory().name())")
    RouteResponseDto toDto(Route route);

}