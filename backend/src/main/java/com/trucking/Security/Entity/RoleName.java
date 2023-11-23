package com.trucking.Security.Entity;

/**
 * Enumeración que representa los roles disponibles en la aplicación.
 */
public enum RoleName {
    /**
     * Rol de administrador con privilegios máximos.
     */
    ADMIN,
    /**
     * Rol de propietario (dueño) en el contexto de la aplicación.
     */
    OUNER,
    /**
     * Rol de conductor en el contexto de la aplicación.
     */
    DRIVER,
    /**
     * Rol de mantenimiento en el contexto de la aplicación.
     */
    MAINTENANCE
}