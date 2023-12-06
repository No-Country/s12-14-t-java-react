package com.trucking.entity.audit;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.Optional;

/**
 * @author ROMULO
 * @package com.trucking.entity.audit
 * @license Lrpa, zephyr cygnus
 * @since 4/12/2023
 */
@Component
public class AuditorAwareImpl implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (Objects.isNull(authentication) || !authentication.isAuthenticated()) {
            return Optional.of("System");
        }

        return Optional.of(authentication.getName().toUpperCase());
    }
}
