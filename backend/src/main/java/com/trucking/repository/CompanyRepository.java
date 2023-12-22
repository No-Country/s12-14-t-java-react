package com.trucking.repository;

import com.trucking.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    public Optional<Company> findByName(String name);
}
