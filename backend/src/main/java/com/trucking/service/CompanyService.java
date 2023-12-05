package com.trucking.service;

import com.trucking.entity.Company;

import java.util.Optional;

public interface CompanyService {

    public Optional<Company> findByName(String name);
}
