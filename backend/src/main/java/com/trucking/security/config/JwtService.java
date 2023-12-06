package com.trucking.security.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/**
 * Servicio para la gestión de tokens JWT (JSON Web Tokens).
 */
@Service
public class JwtService {

    @Value("${api.security.secret}")
    private String SECRET_KEY;

    /**
     * Genera un token JWT con reclamaciones adicionales y detalles de usuario.
     *
     * @param extraClaims Reclamaciones adicionales para incluir en el token.
     * @param userDetails Detalles del usuario para incluir en el token.
     * @return Token JWT generado.
     */
    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails
    ) {

        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) //se vence en 1 h
                .signWith(getSignIngKey(), SignatureAlgorithm.HS256)
                .compact();

    }

    /**
     * Genera un token JWT utilizando los detalles de usuario por defecto y sin reclamaciones adicionales.
     *
     * @param userDetails Detalles del usuario para incluir en el token.
     * @return Token JWT generado.
     */
    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    /**
     * Verifica si un token JWT es válido para los detalles de usuario proporcionados.
     *
     * @param token       Token JWT a verificar.
     * @param userDetails Detalles del usuario para comparar con el token.
     * @return `true` si el token es válido, `false` en caso contrario.
     */
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    /**
     * Verifica si un token JWT ha expirado.
     *
     * @param token Token JWT a verificar.
     * @return `true` si el token ha expirado, `false` en caso contrario.
     */
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date(System.currentTimeMillis()));
    }

    /**
     * Extrae la fecha de expiración de un token JWT.
     *
     * @param token Token JWT del cual extraer la fecha de expiración.
     * @return Fecha de expiración extraída del token.
     */
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    /**
     * Extrae el nombre de usuario (subject) de un token JWT.
     *
     * @param jwtToken Token JWT del cual extraer el nombre de usuario.
     * @return Nombre de usuario extraído del token.
     */
    public String extractUsername(String jwtToken) {
        //extraer el email del token
        return extractClaim(jwtToken, Claims::getSubject);
    }

    /**
     * Extrae una reclamación específica de un token JWT.
     *
     * @param token          Token JWT del cual extraer la reclamación.
     * @param claimsResolver Función que resuelve la reclamación específica.
     * @param <T>            Tipo de dato de la reclamación.
     * @return Reclamación específica extraída del token.
     */
    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    /**
     * Extrae todas las reclamaciones de un token JWT.
     *
     * @param token Token JWT del cual extraer todas las reclamaciones.
     * @return Todas las reclamaciones extraídas del token.
     */
    private Claims extractAllClaims(String token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignIngKey()) //traer la firma del token para verificar que sea el mismo que lo genera
                .build()
                .parseClaimsJws(token)
                .getBody(); //traemos el cuerpo
    }

    /**
     * Obtiene la clave de firma utilizada para verificar la validez del token JWT.
     *
     * @return Clave de firma.
     */
    private Key getSignIngKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

}
