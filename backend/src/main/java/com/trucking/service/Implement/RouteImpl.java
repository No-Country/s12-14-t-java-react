package com.trucking.service.implement;

import com.trucking.dto.pageable.PageableDto;
import com.trucking.dto.route.request.RouteRequestDto;
import com.trucking.dto.route.response.RouteResponseDto;
import com.trucking.entity.Route;
import com.trucking.mapper.RouteMapper;
import com.trucking.repository.RouteRepository;
import com.trucking.service.RouteService;
import com.trucking.util.Utility;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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
    public RouteResponseDto create(RouteRequestDto data) {
        String[] ruta = {};
        routeRepository.findByRegister(data.register())
                .ifPresent(route -> {
                    throw new IllegalArgumentException("Ya existe una ruta con ese numero de registro");
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
    public Optional<RouteResponseDto> getById(Long id) {
        if (Objects.isNull(id)) throw new IllegalArgumentException("El id no puede ser nulo");
        Route route = routeRepository.findById(id).orElse(null);
        if (Objects.isNull(route)) throw new IllegalArgumentException("No existe una ruta con ese id");
        return Optional.of(routeMapper.toDto(route));

    }

    @Override
    public RouteResponseDto update(Long id, RouteRequestDto data) {
        if (Objects.isNull(id)) throw new IllegalArgumentException("El id no puede ser nulo");
        boolean exists = routeRepository.existsById(id);
        if (!exists) throw new IllegalArgumentException("No existe una ruta con ese id, no se puede actualizar");
        Optional<Route> route = routeRepository.findById(id);
        Route updateRoute = route.get().updateRoute(data);
        return routeMapper.toDto(routeRepository.save(updateRoute));
    }

    @Override
    public void delete(Long id) {
        if (Objects.isNull(id)) throw new IllegalArgumentException("El id no puede ser nulo");
        Route route = routeRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("No existe una ruta con ese id"));
        routeRepository.delete(route);
    }
}
