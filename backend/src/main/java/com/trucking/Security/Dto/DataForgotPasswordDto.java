package com.trucking.Security.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DataForgotPasswordDto {

    private String name;
    private String email;
    private String token;
}
