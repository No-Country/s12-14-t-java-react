package com.trucking.entity;

import com.trucking.entity.enums.VehicleType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    //@Temporal(TemporalType.TIMESTAMP)
    private String dateVtv;

    @Enumerated(EnumType.STRING)
    private VehicleType vehicleType;

    //private String color;
    //private Integer km;
    @ManyToOne
    private Fuel fuel;
    private String motor;
    private String chassis;
    @OneToMany
    private List<RegMaint> maintenance;
    @OneToMany
    private List<Fail> fails;

    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "idRoute")
    private Route route;

}
