package com.trucking.Security.Auth;

import com.trucking.Security.Dto.*;
import io.jsonwebtoken.ExpiredJwtException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@RequestMapping("/auth")
@RequiredArgsConstructor
//@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Management Auth User", description = "Client authentication and registration management")
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
            description = "Todos pueden generar un registro",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    ),
                    @ApiResponse(
                            responseCode = "201",
                            description = "Created",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = AuthenticationResponseDto.class))}
                    ),
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
            summary = "Controller para realizar el login de un usuario",
            description = "Realizar el login del usuario con sus credenciales",
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
    public ResponseEntity<?> login(@Valid @RequestBody LoginUserDto login) {

                AuthenticationResponseDto response = authenticationService.login(login);
                return ResponseEntity.status(HttpStatus.OK).body(response);
    }


    @PutMapping("/changePassword")
    @Operation(
            summary = "Controller para cambiar password de un usuario"
    )
    public ResponseEntity<MsgDto> changePass(@RequestHeader("Authorization") String token , @Valid @RequestBody ChangePasswordDto changePasswordDto){

        MsgDto changePasswordMsg = authenticationService.changePassword(token,changePasswordDto);

        return ResponseEntity.status(HttpStatus.OK).body(changePasswordMsg);
    }


    /**
     * Maneja las solicitudes de forgot password de usuarios existentes.
     *
     * @param email Data del usuario que olvidó el password de su usuario
     * @return ResponseEntity con el ok en caso de enciar el email al usuario para hacer el cambio de contraseña.
     */
    @PostMapping("/forgot-password")
    @Operation(
            summary = "Controller para realizar el proceso para cambiar el password del usuario",
            description = "Se realiza el envio del email del usuario que olvido su password",
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
    public ResponseEntity<?> forgotPassword(@RequestBody @Valid ForgotPasswordDto email) throws MessagingException {
        AuthenticationResponseDto response = authenticationService.forgotPassword(email);
        return new ResponseEntity<>(new MsgDto("Email enviado al correo " + email.getEmail()), HttpStatus.OK);
    }

    /**
     * Maneja las solicitudes de forgot password de usuarios existentes.
     *
     * @param password nuevo password del usuario
     * @return ResponseEntity ok con el nuevo password del usuario.
     */
    @PostMapping("/recover-password")
    @Operation(
            summary = "Controller para realizar el cambio de contraseña de cualquier usuario",
            description = "Se realiza el cambio de contraseña, si " +
                    "el token es valido y no esta expirado. El token tiene una duración de 1 hora",
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
    public ResponseEntity<?> changePassword(@RequestBody @Valid RecoverPasswordDto password) {

        try {
            AuthenticationResponseDto response = authenticationService.changePasswordUrl(password.getUrl(), password.getPassword());
            return new ResponseEntity<>(new MsgDto("La contraseña ha sido actualizada exitosamente"), HttpStatus.OK);
        } catch (ExpiredJwtException e) {
            return new ResponseEntity<>(new MsgDto("El token de recuperacion ya expiro"), HttpStatus.BAD_REQUEST);
        }
    }
}
