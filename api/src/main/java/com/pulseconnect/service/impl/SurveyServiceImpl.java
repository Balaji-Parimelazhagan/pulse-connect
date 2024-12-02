package com.pulseconnect.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

import com.pulseconnect.entity.Survey;
import com.pulseconnect.entity.SurveyResponse;
import com.pulseconnect.entity.dto.SurveyDTO;
import com.pulseconnect.entity.dto.SurveyResponseDTO;
import com.pulseconnect.repository.SurveyRepository;
import com.pulseconnect.repository.SurveyResponseRepository;
import com.pulseconnect.service.SurveyService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SurveyServiceImpl implements SurveyService {
    @Autowired
    private SurveyRepository surveyRepository;

    @Autowired
    private SurveyResponseRepository surveyResponseRepository;

    @Autowired
    private ModelMapper modelMapper;

    public SurveyDTO createSurvey(SurveyDTO surveyDto) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        Survey survey = modelMapper.map(surveyDto, Survey.class);
        survey = surveyRepository.save(survey);
        return modelMapper.map(survey, SurveyDTO.class);
    }

    public List<SurveyDTO> getSurveyByTitle(String title) {
        List<SurveyDTO> surveyDTOs = new ArrayList<>();

        List<Survey> surveys = surveyRepository.findByTitleLikeIgnoreCase(title);
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        if (!surveys.isEmpty()) {
            surveyDTOs = modelMapper.map(surveys, new TypeToken<List<SurveyDTO>>() {
            }.getType());
        }
        return surveyDTOs;
    }

    public SurveyResponseDTO saveSurveyResponse(SurveyResponseDTO surveyResponseDTO) {
        SurveyResponse surveyResponse = modelMapper.map(surveyResponseDTO, SurveyResponse.class);
        surveyResponse = surveyResponseRepository.save(surveyResponse);
        return modelMapper.map(surveyResponse, SurveyResponseDTO.class);
    }

    public SurveyDTO getSurveyById(UUID id, boolean isResponseNeeded) {
        SurveyDTO surveyDto = new SurveyDTO();
        Survey survey = surveyRepository.findById(id).orElse(null);
        if (Objects.nonNull(survey)) {
            surveyDto = modelMapper.map(survey, SurveyDTO.class);
            if (isResponseNeeded) {
                SurveyResponse surveyResponse = surveyResponseRepository.findBySurveyId(id);
                surveyDto.setSurveyResponse(Objects.nonNull(surveyResponse)
                        ? modelMapper.map(surveyResponse, SurveyResponseDTO.class) : null);
            }
        }
        return surveyDto;
    }

    public List<SurveyDTO> getSurveyList() {
        List<SurveyDTO> surveyDtos = new ArrayList<>();
        List<Survey> surveys = surveyRepository.findAll();
        if (!surveys.isEmpty())
            surveyDtos = modelMapper.map(surveys, new TypeToken<List<SurveyDTO>>() {
            }.getType());
        return surveyDtos;
    }
}
