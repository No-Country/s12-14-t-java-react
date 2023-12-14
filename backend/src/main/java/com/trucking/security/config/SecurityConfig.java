package com.trucking.security.config;

import com.trucking.security.entity.RoleName;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Configuración de seguridad para la aplicación.
 */
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    /**
     * Configuración del filtro de seguridad y la gestión de sesiones.
     *
     * @param httpSecurity Configuración de seguridad HTTP.
     * @return Cadena de filtros de seguridad.
     * @throws Exception Si hay un error al configurar la seguridad HTTP.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                        auth -> auth
                                .requestMatchers("/auth/**").permitAll()
                                .requestMatchers("/reg-mant/**").hasAnyAuthority(
                                        RoleName.OWNER.name(),
                                        RoleName.MAINTENANCE.name()
                                )
                                .requestMatchers("/vehicle/**").hasAnyAuthority(
                                        RoleName.OWNER.name()
                                )
                                .requestMatchers("/list/vehicle/**").hasAnyAuthority(
                                        RoleName.OWNER.name(),
                                        RoleName.MAINTENANCE.name(),
                                        RoleName.DRIVER.name()
                                )
                                .requestMatchers("/swagger-ui.html", "/v3/api-docs/**", "/swagger-ui/**").permitAll()
                                .anyRequest().authenticated()
                ).sessionManagement(
                        session -> {
                            session
                                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
                        }
                )
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

}
