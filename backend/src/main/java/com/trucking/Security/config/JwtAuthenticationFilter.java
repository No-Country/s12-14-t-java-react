package com.trucking.Security.config;

import com.trucking.Security.config.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
/**
 * Filtro que maneja la autenticación mediante tokens JWT en las solicitudes HTTP.
 */
@Component
@RequiredArgsConstructor //crea los contructures de los final que se usen en la clase
public class JwtAuthenticationFilter extends OncePerRequestFilter {
//    OncePerRequestFilter se usa para que se ejecute una vez el filtro

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    /**
     * Filtra las solicitudes HTTP para autenticar mediante tokens JWT.
     *
     * @param request     La solicitud HTTP.
     * @param response    La respuesta HTTP.
     * @param filterChain Cadena de filtros a través de la cual se procesa la solicitud.
     * @throws ServletException Si hay un error en el manejo de la solicitud.
     * @throws IOException      Si hay un error de entrada/salida.
     */
    @Override
    protected void doFilterInternal( @NotNull HttpServletRequest request, @NotNull HttpServletResponse response,
            @NotNull FilterChain filterChain ) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        final String jwtToken;
        final String userEmail;

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        //quitamos el Bearer del token
        jwtToken = authHeader.substring(7);

        //sacar el email del token, se usa username porque asi lo requiere jwt
        userEmail = jwtService.extractUsername(jwtToken);

        //validar si el email no es null y si ya esta autnticado
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);

            if (jwtService.isTokenValid(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);

    }
}
