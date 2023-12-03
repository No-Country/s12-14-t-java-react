package com.trucking.Controller;

import com.trucking.Dto.NewEmployeeDto;
import com.trucking.Entity.Employee;
import com.trucking.Security.Dto.AuthenticationResponseDto;
import com.trucking.Security.Dto.NewUserDto;
import com.trucking.Service.EmployeeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping("/registerEmployee")
    @Operation(
            summary = "Controller para registrar un Cliente",
            description = "Solo rol OWNER Y ADMIN pueden generar un registro",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    )
            }
    )
    public ResponseEntity<Employee> registerEmployee(@Valid @RequestBody NewEmployeeDto newEmployeeDto , @RequestHeader("Authorization") String token ) {

        Employee response = employeeService.registerEmployee(newEmployeeDto,token);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
