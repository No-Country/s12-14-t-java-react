package com.trucking.service.implement;

import com.trucking.entity.Company;
import com.trucking.repository.CompanyRepository;
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
