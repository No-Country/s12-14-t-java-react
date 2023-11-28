package com.trucking.Service;

import com.trucking.Entity.Company;

import java.util.Optional;

public interface CompanyService {

    public Optional<Company> findByName(String name);
}
