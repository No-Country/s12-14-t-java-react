package com.trucking.Security.Auth;

import com.trucking.Entity.Company;
import com.trucking.Repository.CompanyRepository;
import com.trucking.Security.Dto.*;
import com.trucking.Security.Entity.*;
import com.trucking.Security.HandlerError.ValidationIntegrity;
import com.trucking.Security.Repository.UserRepository;
import com.trucking.Security.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Servicio que gestiona la autenticación de usuarios, incluyendo el registro y inicio de sesión.
 */
@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    /**
     * Registra un nuevo usuario en el sistema.
     *
     * @param newUserDto Datos del nuevo usuario a registrar.
     * @return Respuesta de autenticación que incluye el token JWT generado.
     * @throws ValidationIntegrity Si el email ya se encuentra registrado.
     */
    public AuthenticationResponseDto register(NewUserDto newUserDto) {

        if (userRepository.findByEmail(newUserDto.getEmail()).isPresent()) {
            throw new ValidationIntegrity("Email ya registrado");
        }
        Company company = new Company();
        if (companyRepository.findByName(newUserDto.getCompanyName()).isPresent()) {
            company = companyRepository.findByName(newUserDto.getCompanyName()).get();
        } else {
            company = companyRepository.save(new Company(
                    null,
                    newUserDto.getCompanyName(),
                    null));
        }

        var user = User.builder()
                .name(newUserDto.getName())
                .email(newUserDto.getEmail())
                .password(passwordEncoder.encode(newUserDto.getPassword()))
                .role(RoleName.OWNER)
                .company(company)
                .build();

        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponseDto
                .builder()
                .token(jwtToken)
                .user(ShowDataUserDto.builder()
                        .id(user.getId())
                        .name(user.getName())
                        .email(user.getEmail())
                        .companyName(company.getName())
                        .role(RoleName.valueOf(String.valueOf(user.getRole()))).build()

                ).build();

    }

    /**
     * Inicia sesión con las credenciales proporcionadas.
     *
     * @param login Datos del usuario para iniciar sesión.
     * @return Respuesta de autenticación que incluye el token JWT generado.
     * @throws ValidationIntegrity Si el correo electrónico no se encuentra en la base de datos.
     */
    public AuthenticationResponseDto login(LoginUserDto login) {

        var user = userRepository.findByEmail(login.getEmail()).orElseThrow(() -> new ValidationIntegrity("Usuario o contraseña invalidos"));

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        login.getEmail(),
                        login.getPassword()
                )
        );

        var token = jwtService.generateToken(user);

        var company = companyRepository.findById(user.getCompany().getId());

        return AuthenticationResponseDto.builder().token(token).user(ShowDataUserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .companyName(company.get().getName())
                .role(RoleName.valueOf(String.valueOf(user.getRole()))).build()
        ).build();
    }

    public MsgChangePasswordDto changePassword(String tokenJwt ,ChangePasswordDto changePasswordDto) {
        var token = tokenJwt.replace("Bearer ", "");
        String email= jwtService.extractUsername(token);
        Optional<User> userByEmail = userRepository.findByEmail(email);

        if (userByEmail.isEmpty()) {
            // El usuario no existe
            return new MsgChangePasswordDto("Usuario no encontrado");
        }

        User user = userByEmail.get();

        // Verificar la contraseña antigua
        if (!passwordEncoder.matches(changePasswordDto.getOldPassword(), user.getPassword())) {
            // La contraseña antigua no es válida
            return new MsgChangePasswordDto("Contraseña antigua incorrecta");
        }
        // Verificar el rol antes de permitir el cambio de contraseña
        var rol =user.getRole().toString();

            // Actualizar la contraseña con la nueva
            user.setPassword(passwordEncoder.encode(changePasswordDto.getNewPassword()));
            userRepository.save(user);

            return new MsgChangePasswordDto("Contraseña cambiada exitosamente");

    }

}


