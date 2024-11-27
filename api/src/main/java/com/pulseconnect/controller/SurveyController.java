package com.pulseconnect.controller;

import com.pulseconnect.entity.dto.SurveyDTO;
import com.pulseconnect.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
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

    // @GetMapping("/{id}")

}
