package com.trucking.service;

import com.trucking.controller.NewDriver;
import com.trucking.dto.employee.DataNewEmployee;
import com.trucking.dto.employee.DataShowEmployee;
import com.trucking.dto.employee.UpdateEmployee;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EmployeeService {

    DataShowEmployee save(DataNewEmployee newEmployee);
    DataShowEmployee saveDriver(NewDriver driver, String token);
    DataShowEmployee update(Long id, UpdateEmployee updateEmployee, String token);
    DataShowEmployee delete(Long id, String token);
    DataShowEmployee deactivateEmpyee(Long id, String token);
    DataShowEmployee findEmployeeById(Long id, String token);
    List<DataShowEmployee> getAllEmployees(String token);
    List<DataShowEmployee> getActiveEmployees(String token);
    String passwordGenerator();

}
