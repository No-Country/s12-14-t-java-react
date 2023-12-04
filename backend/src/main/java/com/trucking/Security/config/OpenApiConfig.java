package com.trucking.Security.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author ROMULO
 * @package com.nocountry.trucking.config
 * @license Lrpa, zephyr cygnus
 * @since 23/11/2023
 */
@Configuration
@OpenAPIDefinition(
        servers = {@Server(
                url = "https://trucking-jebius.koyeb.app/api/v1/",
                description = "production server"),
                @Server(
                        url = "http://127.0.0.1:8080/api/v1/",
                        description = "development server")
        })
@SecurityScheme(
        name = "bearerAuth",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer",
        description = "Enter JWT Bearer token",
        in = SecuritySchemeIn.HEADER
)
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Trucking API")
                        .version("1.0")
                        .description("Documentation Trucking API v1.0")
                        .termsOfService("http://swagger.io/terms/")
                        .license(new License()
                                .name("Apache 2.0")
                                .url("http://springdoc.org"))
                        .contact(new Contact()
                                .name("TRUCKING API TEAM")
                                .url("https://s12-14-t-java-react.vercel.app"))
                );

    }
}
