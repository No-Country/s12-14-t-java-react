package com.trucking.Security.Dto;


import java.time.LocalDate;

public class MsgDto {



    private String message;
    private LocalDate dateupdate ;


    public MsgDto(String msg) {

        this.message= msg;
        this.dateupdate = LocalDate.now();
    }

    public  String getMessage(){
        return this.message;
    }
    public LocalDate getApplicationDate() {
        return this.dateupdate;
    }
}
