package com.pulseconnect.entity.dto;

import java.util.Date;
import java.util.UUID;

import com.pulseconnect.entity.Survey;
import com.pulseconnect.entity.User;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActionItemDTO {

    private UUID id;

    private String snippet;

    private String description;

    @NotNull
    private UUID surveyId;  // Assuming you only need the ID of the related Survey

    @NotNull
    private UUID assigneeId;  // Assuming you only need the ID of the related User

    @NotNull
    private String priority;

    @NotNull
    private String status;

}
