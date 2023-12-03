package com.trucking.Repository;

import com.trucking.Entity.Company;
import com.trucking.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {


    Optional<Employee> findByEmail(String email);
}
