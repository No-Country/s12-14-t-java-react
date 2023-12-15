package com.trucking.security.config;
//
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class CorsConfig implements WebMvcConfigurer {
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry){
//        registry.addMapping("/**")
//                .allowedOrigins("http://149.50.131.109:9896","http://localhost:3000", "http://localhost:5173", "https://trucking-jebius.koyeb.app","https://s12-14-t-java-react-rho.vercel.app","https://s12-14-t-java-react.vercel.app")
//                .allowedMethods("GET","POST","PUT", "DELETE")
//                .exposedHeaders("CONTENT_TYPE", "AUTHORIZATION","ACCEPT")
//                .allowCredentials(true);
//    }
//}


import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import org.springframework.core.Ordered;

/**
 * This class configures Cross-Origin Resource Sharing (CORS) settings for the application.
 */
@Configuration
@EnableWebMvc
public class CorsConfig {

    /**
     * Configures global CORS settings for the application using WebMvcConfigurer.
     *
     * @return An instance of WebMvcConfigurer with CORS settings.
     */
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedHeaders("*");
            }
        };
    }

    /**
     * Configures a CORS filter for the application using FilterRegistrationBean.
     *
     * @return A FilterRegistrationBean for the CORS filter.
     */
    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:5173");
        config.addAllowedOrigin("http://localhost:3000/");
        config.addAllowedOrigin("http://149.50.131.109:9896");
        config.addAllowedOrigin("https://trucking-jebius.koyeb.app");
        config.addAllowedOrigin("https://s12-14-t-java-react-rho.vercel.app");
        config.addAllowedOrigin("https://s12-14-t-java-react.vercel.app");
        config.setAllowedHeaders(Arrays.asList(
                HttpHeaders.AUTHORIZATION,
                HttpHeaders.CONTENT_TYPE,
                HttpHeaders.ACCEPT
        ));
        config.setAllowedMethods(Arrays.asList(
                HttpMethod.GET.name(),
                HttpMethod.POST.name(),
                HttpMethod.PUT.name(),
                HttpMethod.DELETE.name()
        ));
        config.setMaxAge(3600L);
        source.registerCorsConfiguration("/**", config);

        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }
}