package com.pulseconnect.common;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
