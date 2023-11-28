package com.trucking.Security.Dto;

import lombok.Data;

import java.util.Date;
import java.util.List;


public class MsgChangePasswordDto {



    private String mensaje;



    public MsgChangePasswordDto(String msg) {
        this.mensaje= msg;
    }

    public  String getMessage(){
        return this.mensaje;
    }
}
