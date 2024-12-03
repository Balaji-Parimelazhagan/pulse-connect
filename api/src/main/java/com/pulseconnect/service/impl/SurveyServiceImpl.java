package com.pulseconnect.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

import com.pulseconnect.entity.Form;
import com.pulseconnect.entity.Survey;
import com.pulseconnect.entity.SurveyResponse;
import com.pulseconnect.entity.dto.SurveyDTO;
import com.pulseconnect.entity.dto.SurveyResponseDTO;
import com.pulseconnect.repository.FormRepository;
import com.pulseconnect.repository.SurveyRepository;
import com.pulseconnect.repository.SurveyResponseRepository;
import com.pulseconnect.service.EmailService;
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
    private FormRepository formRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private EmailService emailService;

    public SurveyDTO createSurvey(SurveyDTO surveyDto) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        Survey survey = modelMapper.map(surveyDto, Survey.class);
        Form form = new Form();
        form.setName(surveyDto.getTitle());
        form.setTemplate(String.valueOf(surveyDto.getQuestions()));
        form = formRepository.save(form);
        survey.setForm(form);
        survey = surveyRepository.save(survey);
        List<String> recipientEmails  = surveyDto.getEmails();
        for (String recipient : recipientEmails) {
            emailService.sendEmail(recipient, "We Value Your Feedback – Please Take Our Survey", "Hi,\r\n"
                    + "\r\n"
                    + "We hope you're doing well! At Ideas2it, we're always striving to improve and provide you with the best possible experience. Your feedback is incredibly important to us, and we'd love to hear your thoughts.\r\n"
                    + "\r\n"
                    + "To help us serve you better, we’ve created a brief survey that will only take a few minutes to complete. Please click the link below to get started:\r\n"
                    + "\r\n" 
                    + "<a href=\"http:localhost:5000/survey/" + survey.getId() + "\" style=\"background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px;\">Start Survey</a>\r\n"
                    + "Your input will directly contribute to making [product/service] better for everyone. We truly appreciate your time and insights.\r\n"
                    + "\r\n"
                    + "Thank you for being a valued part of our community!");
        };
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
