package com.trucking.repository;

import com.trucking.security.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<User, Long> {
    List<User> findByActiveIsTrue();
    List<User> findAllByCompanyIdAndActiveIsTrue(Long companyId);
    List<User> findAllByCompanyId(Long companyId);

}
