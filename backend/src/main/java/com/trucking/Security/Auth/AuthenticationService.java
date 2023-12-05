package com.trucking.Security.Auth;

import com.trucking.Entity.Company;
import com.trucking.Repository.CompanyRepository;
import com.trucking.Security.Dto.*;
import com.trucking.Security.Entity.RoleName;
import com.trucking.Security.Entity.User;
import com.trucking.Security.HandlerError.ValidationIntegrity;
import com.trucking.Security.Repository.UserRepository;
import com.trucking.Security.Service.EmailService;
import com.trucking.Security.Service.UserServiceImplement;
import com.trucking.Security.config.JwtService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
    private final UserServiceImplement userServiceImplement;
    private final EmailService emailService;

    @Value("${api.security.secret}")
    String SECRET_KEY;

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

        var user = userRepository.findByEmail(login.getEmail()).orElseThrow(() -> new ValidationIntegrity("El correo electrónico no está registrado"));

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


    /**
     * Enviar email para cambio de password.
     *
     * @param email email del usuario que requiere cambio de contraseña.
     * @return Envia un email para acceder a la ruta del front para cambio de contraseña.
     * @throws MessagingException Si no se puede hacer el envio del mail al email del usuario.
     */
    public AuthenticationResponseDto forgotPassword(ForgotPasswordDto email) throws MessagingException {

        var user = userRepository.findByEmail(email.getEmail()).orElseThrow(() -> new ValidationIntegrity("Usuario no fue encontrado con el email " + email));

        String tokenPassword = jwtService.generateToken(user);

        DataForgotPasswordDto userForgot = new DataForgotPasswordDto();
        userForgot.setEmail(email.getEmail());
        userForgot.setName(user.getName());
        userForgot.setToken(tokenPassword);

        emailService.setEmail(userForgot);
        return AuthenticationResponseDto.builder().token(tokenPassword).user(ShowDataUserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .role(RoleName.valueOf(String.valueOf(user.getRole()))).build()
        ).build();
    }

    /**
     * Cambio de contraseña para los usuarios.
     *
     * @param url String de la url de la página de cambiar el password (url + token).
     * @param password String nuevo password del usuario.
     */
    public AuthenticationResponseDto changePasswordUrl(String url, String password) {

        String takeTokenWithRegex = "/new-password/(.*?)$";
        Pattern pattern = Pattern.compile(takeTokenWithRegex);
        Matcher matcher = pattern.matcher(url);
        String token = null;
        String emailUser = null;
        if(matcher.find()) {
            token = matcher.group(1);
        }

        if(token != null) {
            Claims claims = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
            emailUser = claims.getSubject();
            userServiceImplement.updateUserByEmail(emailUser, passwordEncoder.encode(password));

        }
        var user = userRepository.
                findByEmail(emailUser).
                orElseThrow(() -> new ValidationIntegrity("Usuario no fue encontrado con el email "));

        return AuthenticationResponseDto.builder().user(ShowDataUserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .role(RoleName.valueOf(String.valueOf(user.getRole()))).build()
        ).build();
    }



    public MsgDto changePassword(String tokenJwt, ChangePasswordDto changePasswordDto) {
        if (changePasswordDto.getOldPassword().equals(changePasswordDto.getNewPassword())) {
            // La contraseña nueva no puede se la antigua
            return new MsgDto("La Contraseña nueva no puede ser la anterior ");
        }
        var token = tokenJwt.replace("Bearer ", "");
        String email = jwtService.extractUsername(token);
        Optional<User> userByEmail = userRepository.findByEmail(email);

        if (userByEmail.isEmpty()) {
            // El usuario no existe
            return new MsgDto("Usuario no encontrado");
        }
        User user = userByEmail.get();

        // Verificar la contraseña antigua
        if (!passwordEncoder.matches(changePasswordDto.getOldPassword(), user.getPassword())) {
            // La contraseña antigua no es válida
            return new MsgDto("Contraseña anterior incorrecta");
        }


        // Actualizar la contraseña con la nueva
        user.setPassword(passwordEncoder.encode(changePasswordDto.getNewPassword()));
        userRepository.save(user);

        return new MsgDto("Contraseña cambiada exitosamente");

    }

}


