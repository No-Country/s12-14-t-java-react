package com.trucking.security.dto;


import java.util.Date;

public class MsgDto {



    private String message;
    private Date date;


    public MsgDto(String msg) {
        this.message= msg;
        this.date = new Date();
    }

    public  String getMessage(){
        return this.message;
    }
    public Date getDate() {
        return this.date;
    }
}
