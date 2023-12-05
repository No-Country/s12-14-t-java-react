package com.trucking.repository;

import com.trucking.entity.ManType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ManTypeRepository extends JpaRepository<ManType, Long> {
       Optional<ManType> findByName(String name);
}
