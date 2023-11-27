package com.trucking.Security.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
public class ErrorMsgDto {

    private Date date;

    private String error;

    private List<String> details;

    public ErrorMsgDto() {
        this.date= new Date();
    }
}
