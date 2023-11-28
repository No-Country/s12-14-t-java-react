package com.trucking.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String model;
    private Integer year;
    private String patent;
    private Integer axle;
    private String color;
    private Integer km;
    @ManyToOne
    private Fuel fuel;
    private String motor;
    private String chassis;
    @OneToMany
    private List<RegMaint> maintenance;
    @OneToMany
    private List<Fail> fails;

}
