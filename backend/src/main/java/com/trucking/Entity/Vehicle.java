package com.trucking.Entity;

import com.trucking.Entity.Enum.VehicleType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String model;
    private Integer year;
    private String patent;
    private Integer axle;

    @Column(name = "date_vtv")
    @Temporal(TemporalType.DATE)
    private LocalDate dateVtv;

    @Enumerated(EnumType.STRING)
    private VehicleType vehicleType;

    @ManyToOne
    private Fuel fuel;
    private String brandMotor;
    private String numberMotor;
    private String brandChassis;
    private String numberChassis;
    @OneToMany
    private List<RegMaint> maintenance;
    @OneToMany
    private List<Fail> fails;

}
