package com.trucking.Security.Dto;


public class MsgDto {



    private String mensaje;



    public MsgDto(String msg) {
        this.mensaje= msg;
    }

    public  String getMessage(){
        return this.mensaje;
    }
}
