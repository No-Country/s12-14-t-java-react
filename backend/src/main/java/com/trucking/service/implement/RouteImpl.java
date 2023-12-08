package com.trucking.service.implement;

import com.trucking.dto.pageable.PageableDto;
import com.trucking.dto.route.request.RouteRequestDto;
import com.trucking.dto.route.response.RouteResponseDto;
import com.trucking.entity.Route;
import com.trucking.entity.enums.RouteCategory;
import com.trucking.exception.DuplicateEntityException;
import com.trucking.exception.InputNotValidException;
import com.trucking.exception.ResourceNotFoundException;
import com.trucking.mapper.RouteMapper;
import com.trucking.repository.RouteRepository;
import com.trucking.service.RouteService;
import com.trucking.util.Utility;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * @author ROMULO
 * @package com.trucking.service.implement
 * @license Lrpa, zephyr cygnus
 * @since 4/12/2023
 */
@Service
@RequiredArgsConstructor
public class RouteImpl implements RouteService {

    private final RouteRepository routeRepository;
    private final RouteMapper routeMapper;

    @Override
    public RouteResponseDto create( RouteRequestDto data) {
        List<RouteCategory> routeCategories = List.of(RouteCategory.values());
        var routeCtg = routeCategories.stream()
                .filter(routeCategory -> routeCategory.name().equals(data.category().strip()))
                .findFirst();
        if (routeCtg.isEmpty()) throw new InputNotValidException(HttpStatus.BAD_REQUEST,"La categoria no es valida. \n\n Las categorias validas son: \n" + routeCategories);
        routeRepository.findByRegister(Integer.valueOf(data.register()))
                .ifPresent(route -> {
                    throw new DuplicateEntityException("Ya existe una ruta con ese numero de registro");
                });
        return routeMapper.toDto(routeRepository.save(routeMapper.toEntity(data)));
    }

    @Override
    public Page<RouteResponseDto> getAll(PageableDto pageable) {
        Pageable setPageable = Utility.setPageable(pageable);
        Page<Route> routePage = routeRepository.findAll(setPageable);
        List<RouteResponseDto> list = routePage.getContent().stream()
                .map(routeMapper::toDto)
                .toList();
        return new PageImpl<>(list);
    }

    @Override
    public RouteResponseDto getById(Long id) {
        if (Objects.isNull(id)) throw new IllegalArgumentException("El id no puede ser nulo");
        Route route = routeRepository.findById(id).orElse(null);
        if (Objects.isNull(route)) throw new ResourceNotFoundException("No existe una ruta con ese id");
        return routeMapper.toDto(route);

    }

    @Override
    public RouteResponseDto update(Long id, RouteRequestDto data) {
        if (Objects.isNull(id)) throw new InputNotValidException("El id no puede ser nulo");
        boolean exists = routeRepository.existsById(id);
        if (!exists) throw new IllegalArgumentException("No existe una ruta con ese id, no se puede actualizar");
        Optional<Route> route = routeRepository.findById(id);
        Route updateRoute = route.get().updateRoute(data);
        return routeMapper.toDto(routeRepository.save(updateRoute));
    }

    @Override
    public void delete(Long id) {
        if (Objects.isNull(id)) throw new InputNotValidException("El id no puede ser nulo");
        Route route = routeRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("No existe una ruta con ese id"));
        routeRepository.delete(route);
    }
}
