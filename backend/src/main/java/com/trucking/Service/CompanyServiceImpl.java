package com.trucking.Service;

import com.trucking.Entity.Company;
import com.trucking.Repository.CompanyRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class CompanyServiceImpl {

    CompanyRepository companyRepository;

    public Optional<Company> findByName(String name){

        return companyRepository.findByName(name);
    }

}
