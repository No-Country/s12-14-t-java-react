package com.trucking.entity;

import com.trucking.dto.route.request.RouteRequestDto;
import com.trucking.entity.audit.Auditable;
import com.trucking.entity.enums.RouteCategory;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * @author ROMULO
 * @package com.trucking.entity
 * @license Lrpa, zephyr cygnus
 * @since 4/12/2023
 */

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SQLDelete(sql = "UPDATE route SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
public class Route extends Auditable<LocalDateTime, String> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "register")
    private Integer register;

    @Column(name = "category",length = 100)
    @Enumerated(EnumType.STRING)
    private RouteCategory category;

    @Column(name = "image")
    private String image;

    private LocalDate expirationDate;

    @Column(name = "is_deleted")
    private boolean deleted;

    public Route updateRoute(RouteRequestDto data) {
        if (Objects.nonNull(data.register())) this.setRegister(data.register());
        if (Objects.nonNull(data.expirationDate())) this.setExpirationDate(data.expirationDate());
        if (StringUtils.hasText(data.category())) this.setCategory(RouteCategory.valueOf(data.category().strip()));
        if (StringUtils.hasText(data.image())) this.setImage(data.image().strip());
        return this;
    }

    @PrePersist
    public void prePersist() {
        this.deleted = false;
    }
}
