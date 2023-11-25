package com.trucking.Security.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Optional;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShowDataUser {

    /**
     * Id del nuevo usuario.
     */
    private Long id;

    /**
     * Nombre del nuevo usuario.
     */
    private String name;

    /**
     * Correo electrónico del nuevo usuario.
     */
    private String email;

    /**
     * Role del nuevo usuario.
     */
    private RoleName role;

}
