package com.trucking.service;

import com.trucking.entity.Company;

import java.util.Optional;

public interface CompanyService {

    Optional<Company> findByName(String name);
}
