package com.trucking.util;

public enum DefaultVehicleTypes {
    AUTOMOVIL("Automóvil"),
    CAMION("Camión"),
    ACOPLADO("Acoplado"),
    COMBI("Combi"),
    CAMIONETA("Camioneta"),
    SEMIREMOLQUE("Semiremolque");

    private String displayName;

    DefaultVehicleTypes(String displayName) {
        this.displayName = displayName;
    }

    public String displayName(){
        return displayName;
    }

}
