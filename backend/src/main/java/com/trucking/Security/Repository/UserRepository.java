package com.trucking.Security.Repository;

import com.trucking.Security.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repositorio de datos para la entidad {@link User}.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Busca un usuario por su dirección de correo electrónico.
     *
     * @param email Dirección de correo electrónico del usuario a buscar.
     * @return Una instancia de {@link Optional} que contiene el usuario si se encuentra, o vacío si no se encuentra.
     */
    Optional<User> findByEmail(String email);

}
