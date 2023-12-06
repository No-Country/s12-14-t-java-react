package com.trucking.security.repository;

import com.trucking.entity.RegMaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegMantRepository extends JpaRepository<RegMaint, Long> {

}
