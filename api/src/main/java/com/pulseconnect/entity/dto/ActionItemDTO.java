package com.pulseconnect.entity.dto;

import java.util.Date;
import java.util.UUID;

import com.pulseconnect.entity.Survey;
import com.pulseconnect.entity.User;

import lombok.Data;

@Data
public class ActionItemDTO {

    private UUID id;

    private String snippet;

    private String description;

    private Survey survey;

    private User assignee;

    private String priority;

    private String status;

    private UUID createdBy;

    private Date createdAt;

    private UUID updatedBy;

    private Date updatedAt;
}
