package com.trucking.repository;

import com.trucking.entity.Company;
import com.trucking.entity.Fuel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FuelRepository extends JpaRepository<Fuel, Long> {

    public Optional<Fuel> findByType(String type);
}
