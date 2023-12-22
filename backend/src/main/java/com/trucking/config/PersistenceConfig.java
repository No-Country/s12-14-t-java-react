package com.trucking.config;

import com.trucking.entity.audit.AuditorAwareImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * @author ROMULO
 * @package com.trucking.config
 * @license Lrpa, zephyr cygnus
 * @since 4/12/2023
 */
@Configuration
public class PersistenceConfig {

    @Bean
    public AuditorAware<String> auditorProvider(){
        return new AuditorAwareImpl();
    }
}
