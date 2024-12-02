package com.pulseconnect.entity.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
public class ActionItemDTO {

    private UUID id;

    private String snippet;

    private String description;

    @NotNull
    private UUID surveyId;

    @NotNull
    private UUID assigneeId;

    @NotNull
    private String priority;

    @NotNull
    private String status;

}
