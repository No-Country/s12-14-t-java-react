package com.trucking.Repository;

import com.trucking.Entity.Company;
import com.trucking.Entity.Fuel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FuelRepository extends JpaRepository<Fuel, Long> {

    public Optional<Fuel> findByType(String type);
}
