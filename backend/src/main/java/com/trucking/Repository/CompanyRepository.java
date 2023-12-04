package com.trucking.Repository;

import com.trucking.Entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    public Optional<Company> findByName(String name);
}
