package com.pulseconnect.controller;

import com.pulseconnect.constants.ApiConstants;
import com.pulseconnect.entity.dto.FormDTO;
import com.pulseconnect.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(ApiConstants.FORMS_BASE_URI)
public class FormController {
    @Autowired
    private FormService formService;


    @PostMapping
    public FormDTO createForm(@RequestBody FormDTO formDTO) {
        return formService.createForm(formDTO);
    }

    @GetMapping(ApiConstants.GET_ALL_URI)
    public List<FormDTO> getAllForms() {
        return formService.getAllForms();
    }

    @GetMapping(ApiConstants.GET_BY_ID_URI)
    public FormDTO getFormById(@PathVariable UUID id) {
        return formService.getFormById(id);
    }

    @GetMapping
    public List<FormDTO> getFormsByName(@RequestParam String name) {
        return formService.getFormsByName(name);
    }
}