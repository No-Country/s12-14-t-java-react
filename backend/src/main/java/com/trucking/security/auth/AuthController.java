package com.trucking.security.auth;

import com.trucking.security.dto.AuthenticationResponseDto;
import com.trucking.security.dto.LoginUserDto;
import com.trucking.security.dto.NewUserDto;
import com.trucking.security.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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

    private final AuthenticationService authenticationService;
    private final UserRepository userRepository;

    /**
     * Maneja las solicitudes de registro de nuevos usuarios.
     *
     * @param newUserDto Datos del nuevo usuario a registrar.
     * @return ResponseEntity con el resultado de la operación y detalles de autenticación.
     */
    @PostMapping("/register")
    @Operation(
            summary = "Controller para registrar un usuario",
            description = "Todos pueden generar un registro",
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
    public ResponseEntity<?> register(@Valid @RequestBody NewUserDto newUserDto) {

                AuthenticationResponseDto response = authenticationService.register(newUserDto);
                return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    /**
     * Maneja las solicitudes de inicio de sesión de usuarios existentes.
     *
     * @param login Datos del usuario para iniciar sesión.
     * @return ResponseEntity con el resultado de la operación y detalles de autenticación.
     */
    @PostMapping("/login")
    @Operation(
            summary = "Controller para loggin de un usuario",
            description = "Todos pueden realizar la autenticación del registro"
    )
    public ResponseEntity<?> login(@Valid @RequestBody LoginUserDto login) {

                AuthenticationResponseDto response = authenticationService.login(login);
                return ResponseEntity.status(HttpStatus.OK).body(response);
    }


}
