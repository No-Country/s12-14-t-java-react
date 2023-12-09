package com.trucking.dto.route.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.URL;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

/**
 * DTO for {@link com.trucking.entity.Route}
 */

public record RouteRequestDto(
        @Schema(description = "Numero de registro", example = "123456789", defaultValue = "123456789")
        @NotEmpty(message = "No debe estar vacio")
        @Size(min = 1, max = 6, message = "Solo se permite 6 caracteres")
        @Pattern(regexp = "^[1-9]{1,6}$", message = "El valor ingresado en la constancia de inscripción no es válido, no se permite carácteres especiales, ni letras")
        String register,
        @Schema(description = "Categoria de la ruta", example = "TCP - Transportista de Carga Propia")
        @NotEmpty(message = "Debe ingresar un tipo de categoria") String category,
        @URL(regexp = "^((((https?|ftps?|gopher|telnet|nntp)://)|(mailto:|news:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:]])?$", message = "Debe ingresar una url valida, ejm: https://example.com/image.jpg")
        @NotEmpty(message = "No debe ser vacío, ni consistir en espacios en blanco")
                @Schema(description = "URL de la imagen", example = "https://example.com/image.jpg", required = true)
        String image,
        @Schema(description = "Fecha de expiración", example = "2021-12-31", defaultValue = "2021-12-31")
        @NotNull LocalDate expirationDate) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
}