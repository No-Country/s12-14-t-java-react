package com.trucking.Security.Auth;

import com.trucking.Security.Dto.*;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



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
     * @param newUserDto Datos del nuevo usuario a registrar.
     * @return ResponseEntity con el resultado de la operación y detalles de autenticación.
     */
    @PostMapping("/register")
    @Operation(
            summary = "Controller para registrar un usuario",
            description = "Todos pueden generar un registro"
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

    /**
     * Maneja las solicitudes de forgot password de usuarios existentes.
     *
     * @param email Data del usuario que olvidó el password de su usuario
     * @return ResponseEntity con el ok en caso de enciar el email al usuario para hacer el cambio de contraseña.
     */
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody @Valid ForgotPassword email) throws MessagingException {
        AuthenticationResponseDto response = authenticationService.forgotPassword(email);
        return new ResponseEntity<>("Email enviado al correo " + email.getEmail(), HttpStatus.OK);
    }

    /**
     * Maneja las solicitudes de forgot password de usuarios existentes.
     *
     * @param password nuevo password del usuario
     * @return ResponseEntity ok con el nuevo password del usuario.
     */
    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody @Valid ChangePassword password) {

        if (password.getPassword1().equals(password.getPassword2())) {
            AuthenticationResponseDto response = authenticationService.changePassword(password.getUrl(), password.getPassword1());
            return new ResponseEntity<>("La contrasña ha sido actualizada exitosamente ", HttpStatus.OK);

        }
        return new ResponseEntity("Las contraseñas deben ser iguales", HttpStatus.BAD_REQUEST);

    }
}
