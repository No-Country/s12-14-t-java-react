package com.trucking.service.implement;

import com.trucking.controller.NewDriver;
import com.trucking.dto.employee.DataNewEmployee;
import com.trucking.dto.employee.DataShowEmployee;
import com.trucking.dto.employee.UpdateEmployee;
import com.trucking.entity.Company;
import com.trucking.repository.CompanyRepository;
import com.trucking.repository.EmployeeRepository;
import com.trucking.security.config.JwtService;
import com.trucking.security.dto.DataForgotPasswordDto;
import com.trucking.security.entity.RoleName;
import com.trucking.security.entity.User;
import com.trucking.security.repository.UserRepository;
import com.trucking.security.service.EmailService;
import com.trucking.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImplement implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final UserRepository userRepository;
    private final EmailService emailService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final CompanyRepository companyRepository;

    /**
     * Implementación del servicio para crear un nuevo empleado para un
     */
    @Override
    public DataShowEmployee save(DataNewEmployee newEmployee) {

        //valiadar rol del usuario del token
//        String tokenUserName = jwtService.extractUsername(token);

//        var dataToken = userRepository.findByEmail(tokenUserName).orElseThrow(
//                () -> new IllegalArgumentException("Error al encontrar el email del usuario"));
        User actualUser = userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
        Company company = companyRepository.findByName(actualUser.getCompany().getName()).get();
        String newPassword = passwordGenerator();
        //crear usuario con password generico
        User newEmpl = new User();
        newEmpl.setName(newEmployee.getName());
        newEmpl.setLastName(newEmployee.getLastName());
        newEmpl.setEmail(newEmployee.getEmail());
        newEmpl.setPassword(passwordEncoder.encode(newPassword));
        newEmpl.setCompany(company);
        newEmpl.setRole(newEmployee.getRoleName());
        newEmpl.setPhoto(newEmployee.getPhoto());
        newEmpl.setActive(true);


        //guardar el usuario
        User savEmpl = employeeRepository.save(newEmpl);
        //generar token para usar en el envio del email
        String tokenProv = jwtService.generateToken(savEmpl);
        //crear el dto para enviar el email
        DataForgotPasswordDto fgt = new DataForgotPasswordDto(newEmpl.getName(), newEmployee.getEmail(), tokenProv);
        //enviar mail para cambio de contraseña
        emailService.setNewEmployeeEmail(fgt, newPassword);
        DataShowEmployee employee = new DataShowEmployee(
                savEmpl.getId(),
                savEmpl.getName(),
                savEmpl.getLastName(),
                savEmpl.getEmail(),
                savEmpl.getCompany().getName(),
                savEmpl.getRole(),
                savEmpl.getPhoto()
        );
        return employee;
    }

    @Override
    public DataShowEmployee saveDriver(NewDriver driver, String token) {
        //valiadar rol del usuario del token
        String tokenUserName = jwtService.extractUsername(token);

        var dataToken = userRepository.findByEmail(tokenUserName).orElseThrow(
                () -> new IllegalArgumentException("Error al encontrar el email del usuario"));

        //crear usuario con password generico
        User newDrv = new User();
        newDrv.setName(driver.getName());
        newDrv.setEmail(driver.getEmail());
        newDrv.setPassword(passwordGenerator());
        newDrv.setCompany(dataToken.getCompany());
        newDrv.setRole(driver.getRoleName());
        newDrv.setPhoto(driver.getPhoto());
        newDrv.setActive(true);
        //guardar el usuario
        User savDriv = employeeRepository.save(newDrv);
        //generar token para usar en el envio del email
        String tokenProv = jwtService.generateToken(savDriv);
        //crear el dto para enviar el email
        DataForgotPasswordDto fgt = new DataForgotPasswordDto(newDrv.getName(), savDriv.getEmail(), tokenProv);
        //enviar mail para cambio de contraseña
        emailService.setEmail(fgt);
        DataShowEmployee driverData = new DataShowEmployee(
                savDriv.getId(),
                savDriv.getName(),
                savDriv.getLastName(),
                savDriv.getEmail(),
                savDriv.getCompany().getName(),
                savDriv.getRole(),
                savDriv.getPhoto(),
                savDriv.getDriverLicencePhoto(),
                savDriv.getCriminalRecord()
        );
        return driverData;
    }


    @Override
    public DataShowEmployee update(Long id, UpdateEmployee updateEmployee, String token) {
        //valiadar rol del usuario del token
        String tokenUserName = jwtService.extractUsername(token);

        var dataToken = userRepository.findByEmail(tokenUserName).orElseThrow(
                () -> new IllegalArgumentException("Error al encontrar el email del usuario"));

        var emplId = employeeRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Empleado no encontrado con el id: " + id));
        if (dataToken.getCompany().equals(emplId.getCompany())) {
            if (emplId != null) {
                if (!updateEmployee.getEmail().isEmpty()) {
                    emplId.setEmail(updateEmployee.getEmail());
                }
                if (!emplId.getPhoto().isEmpty()) {
                    emplId.setPhoto(updateEmployee.getPhoto());
                }
            }
        }else {
            throw new IllegalArgumentException("La compañia del Administrador y del Empleado no es la misma");
        }
        User updEmp = employeeRepository.save(emplId);

        DataShowEmployee employee = new DataShowEmployee(
                updEmp.getId(),
                updEmp.getName(),
                updEmp.getLastName(),
                updEmp.getEmail(),
                updEmp.getCompany().getName(),
                updEmp.getRole(),
                updEmp.getPhoto()
        );
        return employee;

    }

    @Override
    public DataShowEmployee delete(Long id) {
        //valiadar rol del usuario del token

        User actualUser = userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
        Company company = companyRepository.findByName(actualUser.getCompany().getName()).get();


        var emplId = employeeRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Empleado no encontrado con el id: " + id));
        if (company.equals(emplId.getCompany())) {
            employeeRepository.deleteById(id);
        }else  {
            throw new IllegalArgumentException("La compañia del Administrador y del Empleado no es la misma");
        }
        DataShowEmployee employee = new DataShowEmployee(
                emplId.getId(),
                emplId.getName(),
                emplId.getLastName(),
                emplId.getEmail(),
                emplId.getCompany().getName(),
                emplId.getRole(),
                emplId.getPhoto()
        );
//        if (dataToken.getCompany().equals(emplId.getCompany())) {
//            employeeRepository.deleteById(id);
//        }
        return employee;
    }

    @Override
    public DataShowEmployee deactivateEmpyee(Long id, String token) {
        //valiadar rol del usuario del token
        String tokenUserName = jwtService.extractUsername(token);

        var dataToken = userRepository.findByEmail(tokenUserName).orElseThrow(
                () -> new IllegalArgumentException("Error al encontrar el email del usuario"));

        var emplId = employeeRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Empleado no encontrado con el id: " + id));
        if (dataToken.getCompany().equals(emplId.getCompany())) {
            emplId.setActive(false);
        }else  {
            throw new IllegalArgumentException("La compañia del Administrador y del Empleado no es la misma");
        }
        emplId.setActive(false);
        User deavtive = employeeRepository.save(emplId);
        DataShowEmployee employee = new DataShowEmployee(
                deavtive.getId(),
                deavtive.getName(),
                deavtive.getLastName(),
                deavtive.getEmail(),
                deavtive.getCompany().getName(),
                deavtive.getRole(),
                deavtive.getPhoto()
        );

        return employee;
    }

    @Override
    public DataShowEmployee findEmployeeById(Long id, String token) {
        //valiadar rol del usuario del token
        String tokenUserName = jwtService.extractUsername(token);

        var dataToken = userRepository.findByEmail(tokenUserName).orElseThrow(
                () -> new IllegalArgumentException("Error al encontrar el email del usuario"));

        var emplId = employeeRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Empleado no encontrado con el id: " + id));
        DataShowEmployee employee;
        if (dataToken.getCompany().equals(emplId.getCompany())) {
            employee = new DataShowEmployee(
                    emplId.getId(),
                    emplId.getName(),
                    emplId.getLastName(),
                    emplId.getEmail(),
                    emplId.getCompany().getName(),
                    emplId.getRole(),
                    emplId.getPhoto()
            );
        }else  {
            throw new IllegalArgumentException("La compañia del Administrador y del Empleado no es la misma");
        }
        return employee;
    }

    @Override
    public List<DataShowEmployee> getAllEmployees() {
        //valiadar rol del usuario del token
//        String tokenUserName = jwtService.extractUsername(token);

//        var dataToken = userRepository.findByEmail(tokenUserName).orElseThrow(
//                () -> new IllegalArgumentException("Error al encontrar el email del usuario"));

        User actualUser = userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
        Company company = companyRepository.findByName(actualUser.getCompany().getName()).get();


        List<User> all = employeeRepository.findAllByCompanyId(company.getId());
        List<DataShowEmployee> dataShowEmployees = all.stream()
                .map(DataShowEmployee::new)
                .collect(Collectors.toList());
        return dataShowEmployees;
    }

    @Override
    public List<DataShowEmployee> getActiveEmployees(String token) {
        //valiadar rol del usuario del token
        String tokenUserName = jwtService.extractUsername(token);

        var dataToken = userRepository.findByEmail(tokenUserName).orElseThrow(
                () -> new IllegalArgumentException("Error al encontrar el email del usuario"));

        List<User> actives = employeeRepository.findAllByCompanyIdAndActiveIsTrue(dataToken.getCompany().getId());
        List<DataShowEmployee> dataShowEmployees = actives.stream()
                .map(DataShowEmployee::new)
                .collect(Collectors.toList());
        return dataShowEmployees;
    }



    @Override
    public String passwordGenerator() {
        String LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
        String UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String DIGITS = "0123456789";
        String SPECIAL_CHARS = "!#$%&()*+\\-/?@[\\]^_{}|";
        String allChars = LOWERCASE_CHARS + UPPERCASE_CHARS + DIGITS + SPECIAL_CHARS;
        SecureRandom random = new SecureRandom();

        StringBuilder password = new StringBuilder();
        for (int i = 0; i < 9; i++) {
            int randomIndex = random.nextInt(allChars.length());
            password.append(allChars.charAt(randomIndex));
        }
        return password.toString();
    }
}
