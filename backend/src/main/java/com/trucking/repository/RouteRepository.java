package com.trucking.repository;

import com.trucking.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * @author ROMULO
 * @package com.trucking.repository
 * @license Lrpa, zephyr cygnus
 * @since 4/12/2023
 */
public interface RouteRepository extends JpaRepository<Route, Long> {

    Optional<Route> findByRegister(Integer register);


}
