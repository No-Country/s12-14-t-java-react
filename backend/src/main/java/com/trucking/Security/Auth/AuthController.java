package com.trucking.Security.Auth;

import com.trucking.Security.Entity.AuthenticationResponse;
import com.trucking.Security.Entity.LoginUser;
import com.trucking.Security.Entity.NewUser;
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
        }catch (RuntimeException e) {
            return ResponseEntity.internalServerError().build();
        }
    }


}
