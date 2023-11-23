package com.trucking.Security.Auth;

import com.trucking.Security.Entity.AuthenticationResponse;
import com.trucking.Security.Entity.LoginUser;
import com.trucking.Security.Entity.NewUser;
import com.trucking.Security.HandlerError.ValidationIntegrity;
import com.trucking.Security.Repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
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
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authenticationService;
    /**
     * Maneja las solicitudes de registro de nuevos usuarios.
     *
     * @param newUser Datos del nuevo usuario a registrar.
     * @return ResponseEntity con el resultado de la operación y detalles de autenticación.
     */
    @PostMapping("/register")
    @Operation(
            summary = "Controller para registrar un usuario",
            description = "Todos pueden generar un registro"
    )
    public ResponseEntity<?> register(@Valid @RequestBody  NewUser newUser) {
        try {
            AuthenticationResponse response = authenticationService.register(newUser);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (RuntimeException e) {
            return ResponseEntity.internalServerError().body(new ValidationIntegrity(
                    "Error del servidor al registrar el usuario " + e.getMessage()));
        }
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
    public ResponseEntity<?> login(@Valid@RequestBody  LoginUser login) {
        try {
            AuthenticationResponse response = authenticationService.login(login);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }catch (RuntimeException e) {
            return ResponseEntity.internalServerError().body(new ValidationIntegrity(
                    "Error del servidor al autenticar el usuario " + e.getMessage()));

        }
    }


}
