package com.pulseconnect.entity.dto;

import com.pulseconnect.entity.Form;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
public class SurveyDTO {
    private UUID id;

    private String title;

    private Form form;

    private String description;

    private UUID createdBy;

    private Date createdAt;
}
