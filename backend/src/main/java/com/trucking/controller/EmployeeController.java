package com.trucking.controller;

import com.trucking.dto.employee.DataNewEmployee;
import com.trucking.dto.employee.DataShowEmployee;
import com.trucking.dto.employee.UpdateEmployee;
import com.trucking.service.implement.EmployeeServiceImplement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeServiceImplement employeeServiceImplement;


    @PostMapping("/newEmployee")
    @PreAuthorize("OWNER")
    public ResponseEntity<?> newEmployee(@RequestBody @Valid DataNewEmployee dataNewEmployee){
        try {
            DataShowEmployee emp = employeeServiceImplement.save(dataNewEmployee);
            return new ResponseEntity<>(emp, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>("Error al crear el empleado:" + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/newDriver")
    @PreAuthorize("OWNER")
    public ResponseEntity<?> newEmployee(@RequestBody @Valid NewDriver driver, String token){
        try {
            DataShowEmployee emp = employeeServiceImplement.saveDriver(driver, token);
            return new ResponseEntity<>("Conductor creado exitosamente, "+ emp, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>("Error al crear el conductor", HttpStatus.BAD_REQUEST);
        }
    }



    @GetMapping("/allEmployees")
    @PreAuthorize("OWNER")
    public ResponseEntity<?> allEmployees(){
        try {
            List<DataShowEmployee> employeeList = employeeServiceImplement.getAllEmployees();
            return new ResponseEntity<>(employeeList, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al traer todos los empleados", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/employee/{id}")
    @PreAuthorize("OWNER")
    public ResponseEntity<?> employeeById(@PathVariable Long id,  @RequestBody String token){
        try {
            DataShowEmployee empById = employeeServiceImplement.findEmployeeById(id, token);
            return new ResponseEntity<>("Empleado encontrado exitosamente, "+ empById, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al encontrar el empleado", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/activeEmployees")
    @PreAuthorize("OWNER")
    public ResponseEntity<?> activeEmployees( @RequestBody String token){
        try {
            List<DataShowEmployee> activeEmployees = employeeServiceImplement.getActiveEmployees(token);
            return new ResponseEntity<>("Empleado activos, "+ activeEmployees, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al encontrar los empleados activos", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/updateEmployee/{id}")
    @PreAuthorize("OWNER")
    public ResponseEntity<?> newEmployee(@PathVariable long id, @RequestBody @Valid UpdateEmployee updateEmployee, String token){
        try {
            DataShowEmployee updEmployee = employeeServiceImplement.update(id, updateEmployee, token);
            return new ResponseEntity<>("Empleado actualizado exitosamente, "+ updEmployee, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al actualizar el empleado", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/deactiveEmployee/{id}")
    @PreAuthorize("OWNER")
    public ResponseEntity<?> deactiveEmployee(@PathVariable long id, @RequestBody String token){
        try {
            DataShowEmployee deactivateEmpyee = employeeServiceImplement.deactivateEmpyee(id, token);
            return new ResponseEntity<>("Empleado inactivado exitosamente, "+ deactivateEmpyee, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al desactivar el empleado", HttpStatus.BAD_REQUEST);
        }
    }


    @DeleteMapping("/deleteEmployee/{id}")
    @PreAuthorize("OWNER")
    public ResponseEntity<?> deleteEmployee(@PathVariable long id){
        try {
            DataShowEmployee delete = employeeServiceImplement.delete(id);
            return new ResponseEntity<>("Empleado eliminado exitosamente", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Error al eliminar el empleado" + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
