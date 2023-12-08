package com.trucking.dto.route.response;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.Getter;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;

/**
 * @author ROMULO
 * @package com.trucking.dto.route.response
 * @license Lrpa, zephyr cygnus
 * @since 5/12/2023
 */
@JsonPropertyOrder({"image", "category"})
@JsonRootName(value = "data")
@Getter
@Setter
public class RouteResponseDto implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
    private String category;
    private String image;

}
