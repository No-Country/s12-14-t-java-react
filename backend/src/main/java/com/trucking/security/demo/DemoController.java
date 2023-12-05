package com.trucking.security.demo;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/demo")
@RequiredArgsConstructor
public class DemoController {

    @GetMapping
    @Operation(
            summary = "Controller de prueba"
    )
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello from demo controller");
    }
}
