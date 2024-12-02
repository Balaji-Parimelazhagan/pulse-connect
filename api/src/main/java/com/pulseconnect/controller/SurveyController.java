package com.pulseconnect.controller;

import java.util.List;
import java.util.UUID;

import jakarta.validation.Valid;

import com.pulseconnect.entity.dto.SurveyDTO;
import com.pulseconnect.entity.dto.SurveyResponseDTO;
import com.pulseconnect.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("survey")
public class SurveyController {
    @Autowired
    SurveyService surveyService;

    @PostMapping
    SurveyDTO createSurvey(@RequestBody SurveyDTO surveyDTO) {
        return surveyService.createSurvey(surveyDTO);
    }

    @GetMapping("/{id}")
    SurveyDTO getSurvey(@PathVariable("id") UUID id) {
        return surveyService.getSurveyById(id, Boolean.TRUE);
    }

    @PostMapping("/response/save")
    SurveyResponseDTO saveSurveyResponse( @RequestBody @Valid SurveyResponseDTO surveyResponseDTO) {
        return surveyService.saveSurveyResponse(surveyResponseDTO);
    }

    @GetMapping("/list")
    List<SurveyDTO> getSurveyList() {
        return surveyService.getSurveyList();
    }

    @GetMapping("/questions/{id}")
    SurveyDTO getSurveyWithQuestions(@PathVariable("id") UUID id) {
        return surveyService.getSurveyById(id, Boolean.FALSE);
    }
}
