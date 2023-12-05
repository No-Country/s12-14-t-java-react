package com.trucking.entity;

import com.trucking.entity.enums.RouteCategory;
import jakarta.persistence.*;
import lombok.*;

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
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "register")
    private Integer register;

    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    private RouteCategory category;

    @Column(name = "image")
    private String image;

}
