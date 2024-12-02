package com.pulseconnect.service;

import java.util.List;
import java.util.UUID;

import com.pulseconnect.entity.dto.SurveyDTO;
import com.pulseconnect.entity.dto.SurveyResponseDTO;

public interface SurveyService {
    SurveyDTO createSurvey(SurveyDTO survey);

    SurveyResponseDTO saveSurveyResponse(SurveyResponseDTO surveyResponseDTO);

    SurveyDTO getSurveyById(UUID id, boolean isResponseNeeded);

    List<SurveyDTO> getSurveyList();
}
