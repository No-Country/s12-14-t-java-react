package com.trucking.security.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DataChangePasswordEmployee {
    private String name;
    private String email;
    private String currentPassword;
    private String token;
}
