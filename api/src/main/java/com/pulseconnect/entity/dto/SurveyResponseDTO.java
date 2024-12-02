package com.pulseconnect.entity.dto;

import java.util.Date;
import java.util.UUID;

import jakarta.validation.constraints.NotNull;

import lombok.Data;

@Data
public class SurveyResponseDTO {

    private UUID id;

    private String response;

    private UUID userId;

    @NotNull(message = "Survey Id must be given!!")
    private UUID surveyId;

    private UUID createdBy;

    private Date createdAt;
}
