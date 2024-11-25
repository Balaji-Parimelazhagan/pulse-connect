package com.pulseconnect.service.impl;

import com.pulseconnect.repository.SurveyRepository;
import com.pulseconnect.entity.Survey;
import com.pulseconnect.entity.dto.SurveyDTO;
import com.pulseconnect.service.SurveyService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SurveyServiceImpl implements SurveyService {
    @Autowired
    SurveyRepository surveyRepository;

    private ModelMapper modelMapper;

    public SurveyDTO createSurvey (SurveyDTO surveyDto) {
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
            surveyDTOs = modelMapper.map(surveys, new TypeToken<List<SurveyDTO>>(){}.getType());
        }
        return surveyDTOs;
    }
}
