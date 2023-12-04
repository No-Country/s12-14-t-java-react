package com.trucking.Repository;

import com.trucking.Entity.ManType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManTypeRepository extends JpaRepository<ManType, Long> {

}
