package com.trucking.dto.route.request;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.trucking.entity.enums.RouteCategory;
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
public record RouteRequestDto(
        @NotNull @Positive Integer register,
        @NotNull(message = "Debe ingresar un tipo de categoria") String category,
        @NotBlank @URL(regexp = "^((((https?|ftps?|gopher|telnet|nntp)://)|(mailto:|news:))" +
                "(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)" +
                "([).!';/?:,][[:blank:]])?$") String image,
        @NotNull LocalDate expirationDate) implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;
}