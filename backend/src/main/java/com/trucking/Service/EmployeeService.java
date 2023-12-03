package com.trucking.Service;

import com.trucking.Dto.NewEmployeeDto;
import com.trucking.Entity.Company;
import com.trucking.Entity.Employee;

import java.util.Optional;

public interface EmployeeService {

    public Employee registerEmployee(NewEmployeeDto newEmployeeDto,String token);
}
