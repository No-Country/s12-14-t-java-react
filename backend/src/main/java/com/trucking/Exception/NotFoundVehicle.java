package com.trucking.Exception;

public class NotFoundVehicle extends RuntimeException{
    public NotFoundVehicle() {
        super("No se encontró ningún vehículo");
    }
}
