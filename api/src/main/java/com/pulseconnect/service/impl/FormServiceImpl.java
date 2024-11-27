package com.pulseconnect.service.impl;

import com.pulseconnect.entity.Form;
import com.pulseconnect.entity.dto.FormDTO;
import com.pulseconnect.repository.FormRepository;
import com.pulseconnect.service.FormService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class FormServiceImpl implements FormService {
    @Autowired
    private FormRepository formRepository;

    private ModelMapper modelMapper;

    @Override
    public FormDTO createForm(FormDTO formDTO) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        Form form = modelMapper.map(formDTO, Form.class);
        form = formRepository.save(form);
        return modelMapper.map(form, FormDTO.class);
    }

    @Override
    public List<FormDTO> getAllForms() {
        List<Form> forms = formRepository.findAll();
        return forms.stream().map(form -> modelMapper.map(form, FormDTO.class)).collect(Collectors.toList());
    }

    @Override
    public FormDTO getFormById(UUID id) {
        Optional<Form> formOptional = formRepository.findById(id);
        if (formOptional.isPresent()) {
            return modelMapper.map(formOptional.get(), FormDTO.class);
        }
        return new FormDTO();
    }

    @Override
    public List<FormDTO> getFormsByName(String name) {
        List<Form> forms = formRepository.findByNameLikeIgnoreCase(name);
        return forms.stream().map(form -> modelMapper.map(form, FormDTO.class)).collect(Collectors.toList());
    }
}
