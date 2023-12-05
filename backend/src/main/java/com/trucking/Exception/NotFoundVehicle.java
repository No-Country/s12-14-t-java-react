package com.trucking.Exception;

public class NotFoundVehicle extends RuntimeException{
    public NotFoundVehicle() {
        super("El vehiculo no existe");
    }
}
