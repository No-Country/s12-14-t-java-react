package com.trucking.Controller;

import com.trucking.Dto.ManType.ManTypesDto;
import com.trucking.Entity.ManType;
import com.trucking.Security.Dto.AuthenticationResponseDto;
import com.trucking.Service.Implement.ManTypeServiceImplement;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/man_types")
@RestController
@RequiredArgsConstructor
public class ManTypeController {

    private final ManTypeServiceImplement manTypeServiceImplement;


    /**
     * Controlador para crear un nuevo tipo demantenimiento
     *
     * @params name nombre del mantenimiento que se va a crear
     * @return mantType que se creo
     *
     * */
    @Operation(
            summary = "Controller para crear un tipo de mantenimineto",
            description = "creación de tipo de mantenimiento",
            responses = {
                    @ApiResponse(
                            responseCode = "201",
                            description = "Created",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad request",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    )
            }
    )
    @PostMapping("/new")
    public ResponseEntity<?> createManType(@RequestBody @Valid ManTypesDto dto){
        try {

            ManType newMan = manTypeServiceImplement.save(dto);
            return new ResponseEntity<>("Mantenimiento creado exitosamente, "+ newMan, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>("Error al crear el mantenimiento", HttpStatus.BAD_REQUEST);

        }
    }


    /**
     * Controlador para actualizar un tipo de mantenimiento
     *
     * @params id del mantenimiento que se va a actualizar
     * @params name nuevo nombre del mantenimiento
     * @return mantType que se actualizó
     *
     * */
    @Operation(
            summary = "Controller para actualizar un tipo de mantenimineto",
            description = "Actualizar un de tipo de mantenimiento",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad request",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    )
            }
    )
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateManType(@PathVariable Long id, @RequestBody @Valid ManTypesDto dto){
        try {
            ManType updManType = manTypeServiceImplement.updateById(id, dto);
            return new ResponseEntity<>("Mantenimiento actualizado exitosamente, "+ updManType, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al actualizar el mantenimiento", HttpStatus.BAD_REQUEST);

        }
    }

    /**
     * Controlador para listar todos los tipos de mantenimiento
     *
     * @return listado de  mantType creados
     *
     * */
    @Operation(
            summary = "Controller para listar todos los  tipos de manteniminetos",
            description = "Listado de tipos de mantenimiento",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad request",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    )
            }
    )
    @GetMapping("/allTypes")
    public ResponseEntity<?> getAllManTypes(){
        try {
            List<ManType> manTypeList = manTypeServiceImplement.getAllManTypes();
            return new ResponseEntity<>("Listado de tipos de mantenimiento, "+ manTypeList, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al encontrar la lista de tipos de mantenimiento", HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Controlador para buscar un tipo de mantenimiento por id
     *
     * @params id del mantenimiento que se va a buscar
     * @return mantType que se queria buscar
     *
     * */
    @Operation(
            summary = "Controller para listar todos los  tipos de manteniminetos",
            description = "Listado de tipos de mantenimiento",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad request",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    )
            }
    )
    @GetMapping("/manType/{id}")
    public ResponseEntity<?> getManTypeById(@PathVariable Long id){
        try {
            ManType manTypeById = manTypeServiceImplement.findById(id);
            return new ResponseEntity<>("Mantenimiento encontrado, "+ manTypeById, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al encontrar el tipo de mantenimiento con el id: "+ id, HttpStatus.BAD_REQUEST);
        }
    }


    /**
     * Controlador para eliminar un tipo de mantenimiento por id
     *
     * @params id del mantenimiento que se va a eliminar, el id debe ser mayor de 10 ya que existen 10 tipos predeterminados
     * @return mantType que se queria eliminar
     *
     * */
    @Operation(
            summary = "Controller para listar todos los  tipos de manteniminetos",
            description = "Listado de tipos de mantenimiento",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "Bad request",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    )
            }
    )
    @DeleteMapping("/delManType/{id}")
    public ResponseEntity<?> deleteManType(@PathVariable Long id){
        try {
            if (id > 10){
                ManType manTypeById = manTypeServiceImplement.deleteById(id);
                return new ResponseEntity<>("Mantenimiento eliminado correctamente! " + manTypeById, HttpStatus.OK);
            }
            return new ResponseEntity<>("El id del tipo de mantenimiento debe ser mayor a 10", HttpStatus.BAD_REQUEST);

        }catch (Exception e){
            return new ResponseEntity<>("Error al encontrar el tipo de mantenimiento con el id: "+ id, HttpStatus.BAD_REQUEST);
        }
    }






}
