package com.trucking.Security.Repository;

import com.trucking.Entity.RegMaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegMantRepository extends JpaRepository<RegMaint, Long> {

}
