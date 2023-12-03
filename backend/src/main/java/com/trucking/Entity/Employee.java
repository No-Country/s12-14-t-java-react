package com.trucking.Entity;

import com.trucking.Dto.NewEmployeeDto;
import com.trucking.Entity.Enum.RoleEmployee;
import com.trucking.Security.Entity.RoleName;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employee", uniqueConstraints = {@UniqueConstraint(columnNames = "email")})
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private String email;
    @Enumerated(EnumType.STRING)
    private RoleEmployee role;

    public Employee(NewEmployeeDto newEmployeeDto) {
        this.name= newEmployeeDto.getName();
        this.lastName= newEmployeeDto.getLastName();
        this.email=newEmployeeDto.getEmail();
        this.role =newEmployeeDto.getRole();
    }
}
