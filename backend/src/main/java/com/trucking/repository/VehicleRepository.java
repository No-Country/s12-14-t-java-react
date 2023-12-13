package com.trucking.repository;

import com.trucking.entity.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    Page<Vehicle> findByAvailableTrueAndCompanyName(String name, Pageable pageable);
    Page<Vehicle> findByAvailableFalseAndCompanyName(String name, Pageable pageable);
}
