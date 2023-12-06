package com.trucking.dto.route.request;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.trucking.entity.enums.RouteCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.hibernate.validator.constraints.URL;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;

/**
 * DTO for {@link com.trucking.entity.Route}
 */
@JsonPropertyOrder({"category", "image", "expirationDate", "register"})
@JsonRootName(value = "data")
public record RouteRequestDto(
        @Schema(description = "Numero de registro", example = "123456789", defaultValue = "123456789")
        @NotNull @Positive Integer register,
        @Schema(description = "Categoria de la ruta", example = "TCP", enumAsRef = true)
        @NotNull(message = "Debe ingresar un tipo de categoria") String category,
        @NotBlank @URL(regexp = "^((((https?|ftps?|gopher|telnet|nntp)://)|(mailto:|news:))" +
                "(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)" +
                "([).!';/?:,][[:blank:]])?$")
                @Schema(description = "URL de la imagen", example = "https://example.com/image.jpg", required = true)
        String image,
        @Schema(description = "Fecha de expiración", example = "2021-12-31", defaultValue = "2021-12-31")
        @NotNull LocalDate expirationDate) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
}