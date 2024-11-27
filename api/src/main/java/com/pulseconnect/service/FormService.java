package com.pulseconnect.service;

import com.pulseconnect.entity.dto.FormDTO;

import java.util.List;
import java.util.UUID;

public interface FormService {
    FormDTO createForm(FormDTO formDTO);

    List<FormDTO> getAllForms();

    FormDTO getFormById(UUID id);

    List<FormDTO> getFormsByName(String name);
}
