package com.pulseconnect.entity.dto;

import com.pulseconnect.entity.Form;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Data
public class SurveyDTO {

    private UUID id;

    private String title;

    private Form form;

    private String description;

    private UUID createdBy;

    private Date createdAt;

    private String status;

    private SurveyResponseDTO surveyResponse;

    private List<Map<String, Object>> questions;

    private List<String> emails;
}