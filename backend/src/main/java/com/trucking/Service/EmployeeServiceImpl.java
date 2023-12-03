package com.trucking.Service;

import com.trucking.Dto.NewEmployeeDto;
import com.trucking.Entity.Company;
import com.trucking.Entity.Employee;
import com.trucking.Repository.CompanyRepository;
import com.trucking.Repository.EmployeeRepository;
import com.trucking.Security.Entity.User;
import com.trucking.Security.HandlerError.ValidationIntegrity;
import com.trucking.Security.Repository.UserRepository;
import com.trucking.Security.config.JwtService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeServiceImpl implements  EmployeeService {
    @Autowired
    private JwtService jwtService;

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Employee registerEmployee(NewEmployeeDto newEmployeeDto, String tokenJwt) {

        var token = tokenJwt.replace("Bearer ", "");
        var rolEmployee = newEmployeeDto.getRole().toString();
        if (employeeRepository.findByEmail(newEmployeeDto.getEmail()).isPresent()) {
            throw new ValidationIntegrity("Email ya registrado");
        }
        if (rolEmployee.equals("OWNER") || rolEmployee.equals("MAINTENANCE") || rolEmployee.equals("DRIVER")) {
            String email = jwtService.extractUsername(token);
            Optional<User> userByEmail = userRepository.findByEmail(email);

            if (!userByEmail.isPresent()) {
                throw new UsernameNotFoundException("User not found");
            }

            var rol = userByEmail.get().getRole().toString();
            System.out.println(newEmployeeDto);

            if (rol.equals("ADMIN") || rol.equals("OWNER")) {

                Employee newEmployee = employeeRepository.save(new Employee(newEmployeeDto));
                System.out.println(newEmployee);
                return newEmployee;
            } else {

                throw new AccessDeniedException("Insufficient privileges to register a new employee");
            }
        }else{
            throw new IllegalArgumentException("Invalid role for registration");
        }
        }



}

