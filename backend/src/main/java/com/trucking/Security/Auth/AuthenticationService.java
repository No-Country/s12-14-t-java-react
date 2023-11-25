package com.trucking.Security.Auth;

import com.trucking.Security.Entity.*;
import com.trucking.Security.Repository.UserRepository;
import com.trucking.Security.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * Servicio que gestiona la autenticación de usuarios, incluyendo el registro y inicio de sesión.
 */
@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    /**
     * Registra un nuevo usuario en el sistema.
     *
     * @param newUser Datos del nuevo usuario a registrar.
     * @return Respuesta de autenticación que incluye el token JWT generado.
     */
    public AuthenticationResponse register(NewUser newUser) {

        var user = User.builder()
                .name(newUser.getName())
                .email(newUser.getEmail())
                .password(passwordEncoder.encode(newUser.getPassword()))
                .role(RoleName.ADMIN)
                .build();

        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse
                .builder()
                .token(jwtToken)
                .user(ShowDataUser.builder()
                        .id(user.getId())
                        .name(user.getName())
                        .email(user.getEmail())
                        .role(RoleName.valueOf(String.valueOf(user.getRole()))).build()
                ).build();

    }

    /**
     * Inicia sesión con las credenciales proporcionadas.
     *
     * @param login Datos del usuario para iniciar sesión.
     * @return Respuesta de autenticación que incluye el token JWT generado.
     * @throws UsernameNotFoundException Si el correo electrónico no se encuentra en la base de datos.
     */
    public AuthenticationResponse login(LoginUser login) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        login.getEmail(),
                        login.getPassword()
                )
        );

        var user = userRepository.findByEmail(login.getEmail()).orElseThrow(() -> new UsernameNotFoundException("Email not found"));

        var token = jwtService.generateToken(user);

        return AuthenticationResponse.builder().token(token).user(ShowDataUser.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .role(RoleName.valueOf(String.valueOf(user.getRole()))).build()
        ).build();
    }
}
