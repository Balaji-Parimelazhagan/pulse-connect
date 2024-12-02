package com.pulseconnect.common;

public class ErrorResponse {
    private String error;
    private Integer statusCode;

    public ErrorResponse(String error,Integer statusCode){
        this.error=error;
        this.statusCode = statusCode;
    }

    public String getError(){
        return this.error;
    }

    public Integer getStatusCode(){
        return this.statusCode;
    }
}
