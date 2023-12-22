package com.trucking.dto.employee;

import com.trucking.entity.Company;
import com.trucking.security.entity.RoleName;
import com.trucking.security.entity.User;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DataShowEmployee {
    private Long id;
    private String name;
    private String lastName;
    private String email;
    private String company;
    private RoleName roleName;
    private String photo;
    private String criminalRecord;
    private String driverLicencePhoto;

    public DataShowEmployee(User employee) {
        this.id = employee.getId();
        this.name = employee.getName();
        this.lastName = employee.getLastName();
        this.email = employee.getEmail();
        this.company = employee.getCompany().getName();
        this.roleName = employee.getRole();
        this.photo = employee.getPhoto();
    }

    public DataShowEmployee(Long employeeId, String name, String lastName, String email, String company, RoleName role, String photo, String driverLicencePhoto, String criminalRecord) {
        this.id = employeeId;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.company = company;
        this.roleName = role;
        this.photo = photo;
        this.criminalRecord = criminalRecord;
        this.driverLicencePhoto = driverLicencePhoto;
    }

    public DataShowEmployee(Long employeeId, String name, String lastName, String email, String company, RoleName role, String photo) {
        this.id = employeeId;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.company = company;
        this.roleName = role;
        this.photo = photo;
    }

}
