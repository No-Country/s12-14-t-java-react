package com.trucking.Security.Dto;

import com.trucking.Security.Entity.RoleName;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShowDataUserDto {

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
    /**
     * Compañia del nuevo usuario.
     */
    private String companyName;


}
