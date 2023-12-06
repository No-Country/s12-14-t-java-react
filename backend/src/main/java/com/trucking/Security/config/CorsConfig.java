package com.trucking.Security.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://149.50.132.123:9896","http://localhost:3000", "http://localhost:5173", "http://200.45.208.45:9896", "https://trucking-jebius.koyeb.app")
                .allowedMethods("GET","POST","PUT", "DELETE")
                .exposedHeaders("CONTENT_TYPE", "AUTHORIZATION","ACCEPT")
                .allowCredentials(true);
    }
}
