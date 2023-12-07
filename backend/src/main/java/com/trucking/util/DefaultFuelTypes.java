package com.trucking.util;

public enum DefaultFuelTypes {
    GAS("Gas"),
    GASOIL("Gasoil"),
    NAFTA("Nafta"),
    BIOCOMBUSTIBLE("Biocombustible");

    private String displayName;

    DefaultFuelTypes(String displayName) {
        this.displayName = displayName;
    }

    public String displayName(){
        return displayName;
    }

}
