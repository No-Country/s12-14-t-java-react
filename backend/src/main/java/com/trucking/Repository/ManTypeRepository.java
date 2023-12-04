package com.trucking.Repository;

import com.trucking.Entity.ManType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ManTypeRepository extends JpaRepository<ManType, Long> {

       public Optional<ManType> findByName(String name);
}
