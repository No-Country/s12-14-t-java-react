package com.trucking.util;


import com.trucking.dto.pageable.PageableDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

/**
 * @author ROMULO
 * @package com.nocountry.trucking.util
 * @license Lrpa, zephyr cygnus
 * @since 10/10/2023
 */
public final class Utility {

    private Utility() {
    }

    public static Pageable setPageable(PageableDto pageableDTO) {
        Integer sortOrder = pageableDTO.getOrder();
        String sortField = pageableDTO.getField();
        int pageNumber = pageableDTO.getPageNumber();
        int perPage = pageableDTO.getPageSize();

        boolean order = sortOrder.equals(1) || sortOrder.equals(0);
        Pageable pageable;
        if (Objects.nonNull(sortOrder) && !sortField.isBlank() && order) {
            Sort.Direction direction = sortOrder.equals(1) ? Sort.Direction.ASC : Sort.Direction.DESC;
            pageable = PageRequest.of(pageNumber, perPage, Sort.by(direction, sortField));
        } else {
            pageable = PageRequest.of(pageNumber, perPage, Sort.by("id").descending());
        }
        return pageable;
    }

    public String urlServer(HttpServletRequest request, String apiEndpoint){
        String protocol = request.getScheme(); // HTTP o HTTPS
        String serverName = request.getServerName(); // Nombre del servidor
        int serverPort = request.getServerPort(); // Puerto del servidor
        String contextPath = request.getContextPath(); // Contexto de la aplicación web
        // Construye la URL completa
        return protocol + "://" + serverName + ":" + serverPort + contextPath + apiEndpoint;
    }

    public static LocalDate stringToLocalDate(String birthDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        return LocalDate.parse(birthDate.strip(), formatter);
    }


}
