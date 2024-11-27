package com.pulseconnect.entity.dto;

import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
public class FormDTO {
    private UUID id;
    private String name;
    private String template;
    private UUID createdBy;
    private Date createdAt;
}
