package com.trucking.exception;

public class NotFoundVehicle extends RuntimeException{
    public NotFoundVehicle() {
        super("El vehiculo no existe");
    }
}
