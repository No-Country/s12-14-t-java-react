package com.trucking.controller;


import com.trucking.dto.regmant.NewRegMantDto;
import com.trucking.dto.regmant.UpdateRegMant;
import com.trucking.entity.RegMaint;
import com.trucking.exception.NotFoundVehicle;
import com.trucking.security.dto.AuthenticationResponseDto;
import com.trucking.security.dto.ErrorMsgDto;
import com.trucking.security.dto.MsgDto;
import com.trucking.service.implement.RegMantServiceImplement;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/reg-mant")
@Tag(name="registro mantenimiento", description = "Registro de mantenimiento de vehiculo")
public class RegMantenController {

    private final RegMantServiceImplement regMantServiceImplement;

    /**
     * Controlador para crear un nuevo registro de mantenimineto
     *
     * @param newRegMantDto
     * @return RegMaint registrado exitosamente
     *
     */
    @PostMapping("")
    @Operation(
            summary = "Controller para crear un registro mantenimineto",
            description = "creación de registro de mantenimiento para un vehiculo",
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
    public ResponseEntity<?> createRegMaint(@RequestBody @Valid NewRegMantDto newRegMantDto){
        try {
            RegMaint newReg = regMantServiceImplement.save(newRegMantDto);
            return new ResponseEntity<>(new MsgDto("Registro de mantenimiento creado exitosamente"), HttpStatus.CREATED);
        }catch (NotFoundVehicle e){
            return new ResponseEntity<>(new MsgDto(e.getMessage()), HttpStatus.BAD_REQUEST);
        } catch (Exception e){
            return new ResponseEntity<>(new MsgDto("Error al generar registro de mantenimiento "), HttpStatus.BAD_REQUEST);
        }
    }


    /**
     * Controlador para actualizar un registro de mantenimineto
     *
     * @param id del registro de mantenimineto a actualizar
     * @param updateRegMant
     * @return RegMaint actualizado exitosamente
     *
     */
    @PutMapping("/update/{id}")
    @Operation(
            summary = "Controller para actualizar un registro mantenimineto",
            description = "actualización de registro de mantenimiento según el id del registro",
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
    public ResponseEntity<?> updateRegMant(@PathVariable Long id, @RequestBody @Valid UpdateRegMant updateRegMant){
        try{
            RegMaint updReg = regMantServiceImplement.update(id, updateRegMant);
            return new ResponseEntity<>("Registro de mantenimiento actualizado exitosamente "+ updReg, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al actualizar el registro de mantenimiento ", HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Controlador para listar todos los registros de mantenimineto
     *
     * @return listado de los mantenimientos registrados
     *
     */
    @GetMapping("/allRegisters")
    @Operation(
            summary = "Controller para listar todos los registros mantenimineto",
            description = "Encontrar todos los registros de mantenimiento",
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
    public ResponseEntity<?> getAllRegisters(){
        try{
            List<RegMaint> registers = regMantServiceImplement.getAllRegMaints();
            return new ResponseEntity<>(registers, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al buscar los registros de mantenimiento ", HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Controlador para listar todos los registros de mantenimineto
     *
     * @param id registro de mantenimineto
     * @return Registro de mantenimiento
     */
    @GetMapping("/allRegisters/{id}")
    @Operation(
            summary = "Controller para listar un registro mantenimineto",
            description = "Encontrar registro de mantenimiento según su id",
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
    public ResponseEntity<?> getRegisterById(@PathVariable Long id){
        try{
            RegMaint registerById = regMantServiceImplement.findById(id);
            return new ResponseEntity<>(registerById, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al encontrsar el registro de mantenimiento ", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/byVehicle/{id}")
    public ResponseEntity<?> byVehicleId(@PathVariable Long id){

        try {
            return new ResponseEntity<>(regMantServiceImplement.getAllByVehicle(id),HttpStatus.OK);
        } catch (NotFoundVehicle e) {
            return new ResponseEntity<>(new MsgDto(e.getMessage()),HttpStatus.BAD_REQUEST);
        }

    }

    /**
     * Controlador para borrar un registros de mantenimineto
     *
     * @param id regis
     * @return registro de mantenimiento eliminado
     */
    @DeleteMapping("/deleteReg/{id}")
    @Operation(
            summary = "Controller para eliminar un registro mantenimineto",
            description = "Eliminación de un registro de mantenimiento según su id",
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
    public ResponseEntity<?> deleteReg(@PathVariable Long id){
        try{
            RegMaint deletRegisterById = regMantServiceImplement.findById(id);
            return new ResponseEntity<>(deletRegisterById, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al encontrsar el registro de mantenimiento ", HttpStatus.BAD_REQUEST);
        }
    }

}
