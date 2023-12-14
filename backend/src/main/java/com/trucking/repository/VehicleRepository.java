package com.trucking.repository;

import com.trucking.entity.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Meta;
import org.springframework.data.jpa.repository.Query;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    Page<Vehicle> findByAvailableTrueAndCompanyName(String name, Pageable pageable);

    Page<Vehicle> findByAvailableFalseAndCompanyName(String name, Pageable pageable);

    @Query("select v from Vehicle v where upper(v.company.name) like upper(?1) order by v.maintenance.date DESC")
    @Meta(comment = "Query para buscar vehiculos por nombre de la empresa")
    Page<Vehicle> searchVehicleByCompany(String name, Pageable pageable);


}
