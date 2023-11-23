package com.nocountry.trucking.controller.rest;

import com.nocountry.trucking.controller.dto.response.AuthenticationResponse;
import com.nocountry.trucking.controller.dto.request.LoginUser;
import com.nocountry.trucking.controller.dto.request.NewUser;
import com.nocountry.trucking.domain.impl.AuthenticationImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controlador para la gestión de autenticación y autorización de usuarios.
 */
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Management Auth User", description = "Client authentication and registration management")
public class AuthController {

    private final AuthenticationImpl authenticationService;

    /**
     * Maneja las solicitudes de registro de nuevos usuarios.
     *
     * @param newUser Datos del nuevo usuario a registrar.
     * @return ResponseEntity con el resultado de la operación y detalles de autenticación.
     */
    @Operation(
            summary = "Register User",
            description = "registration of a user",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponse.class))}
                    )
            }
    )
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody NewUser newUser) {
        try {
            return ResponseEntity.ok(authenticationService.register(newUser));
        } catch (RuntimeException e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Maneja las solicitudes de inicio de sesión de usuarios existentes.
     *
     * @param login Datos del usuario para iniciar sesión.
     * @return ResponseEntity con el resultado de la operación y detalles de autenticación.
     */
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginUser login) {
        try {
            return ResponseEntity.ok(authenticationService.login(login));
        } catch (RuntimeException e) {
            return ResponseEntity.internalServerError().build();
        }
    }


}
