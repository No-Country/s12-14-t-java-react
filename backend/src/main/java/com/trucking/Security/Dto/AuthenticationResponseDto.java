package com.trucking.Security.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Clase que representa los datos de respuesta.
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponseDto {
    /**
     * Token de acceso.
     */
    private String token;
    /**
     * Token que tiene acceso al toker.
     */
    private ShowDataUserDto user;
}
