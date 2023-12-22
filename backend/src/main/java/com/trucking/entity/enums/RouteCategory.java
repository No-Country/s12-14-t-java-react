package com.trucking.entity.enums;

import lombok.Getter;

/**
 * @author ROMULO
 * @package com.trucking.entity.enums
 * @license Lrpa, zephyr cygnus
 * @since 4/12/2023
 */
@Getter
public enum RouteCategory {
    TCMG("Transportista de Carga Masiva o a Granel"),
    TCPG("Transportista de Carga Peligrosa"),
    TCF("Transportista de Carga Fraccionada"),
    TCP("Transportista de Carga Propia"),
    TTE("Transportista de Tráficos Especiales"),
    TCI("Transportista de Carga Internacional");

    private final String message;
    RouteCategory(String message) {
        this.message = message;
    }

}
