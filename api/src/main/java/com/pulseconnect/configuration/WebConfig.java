package com.pulseconnect.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow requests from frontend at http://localhost:5000
        registry.addMapping("/**")  // Apply to all endpoints
                .allowedOrigins("http://localhost:5000")  // Allow only from this origin
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow specific HTTP methods
                .allowedHeaders("*");  // Allow any headers
    }
}
