package com.trucking.controller;

import com.trucking.dto.pageable.PageableDto;
import com.trucking.dto.route.request.RouteRequestDto;
import com.trucking.dto.route.response.RouteResponseDto;
import com.trucking.service.RouteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author ROMULO
 * @package com.trucking.controller
 * @license Lrpa, zephyr cygnus
 * @since 5/12/2023
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/routes")
@Tag(name = "registro RUTA", description = "Gestión registro unico de transporte automotor")
@SecurityRequirement(name = "bearerAuth")
public class RouteController {

    private final RouteService routeService;

    @Operation(
            summary = "Obtener todas las rutas",
            description = "Todos pueden obtener las rutas",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = Page.class))}
                    ),
            }
    )
    @GetMapping
    public ResponseEntity<?> getAllRoutes(PageableDto pageable) {
        Page<RouteResponseDto> routeAll = routeService.getAll(pageable);
        return new ResponseEntity<>(routeAll, HttpStatus.OK);
    }

    @Operation(
            summary = "Obtener una ruta por id",
            description = "Todos pueden obtener una ruta por id",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = RouteResponseDto.class))}
                    ),
            }
    )
    @GetMapping("/{id}")
    public ResponseEntity<?> getRouteById(@PathVariable Long id) {
        return new ResponseEntity<>(routeService.getById(id), HttpStatus.OK);
    }

    @Operation(summary = "Crear una ruta", description = "Todos pueden crear una ruta"
        , responses={
            @ApiResponse(
                    responseCode = "201",
                    description = "Created",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RouteResponseDto.class))}
            ),
    }
    )
    @PostMapping
    public ResponseEntity<?> createRoute(@Valid @RequestBody RouteRequestDto route) {
        return new ResponseEntity<>(routeService.create(route), HttpStatus.CREATED);
    }

    @Operation(summary = "Actualizar una ruta", description = "Todos pueden actualizar una ruta"
            , responses={
            @ApiResponse(
                    responseCode = "200",
                    description = "Success",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RouteResponseDto.class))}
            ),
    }
    )
    @PatchMapping("/{id}")
    public ResponseEntity<?> updateRoute(@PathVariable Long id, @Valid @RequestBody RouteRequestDto route) {
        return new ResponseEntity<>(routeService.update(id, route), HttpStatus.OK);
    }

    @Operation(summary = "Eliminar una ruta", description = "Todos pueden eliminar una ruta"
            , responses={
            @ApiResponse(
                    responseCode = "204",
                    description = "No content",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema)}
            ),
    }
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRoute(@PathVariable Long id) {
        routeService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
