package com.pulseconnect.service.impl;

import com.pulseconnect.entity.ActionItem;
import com.pulseconnect.entity.Survey;
import com.pulseconnect.entity.User;
import com.pulseconnect.repository.SurveyRepository;
import com.pulseconnect.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.pulseconnect.entity.dto.ActionItemDTO;
import com.pulseconnect.repository.ActionItemRepository;
import com.pulseconnect.service.ActionItemService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ActionItemServiceImpl implements ActionItemService {

    @Autowired
    ActionItemRepository actionItemRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    SurveyRepository surveyRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ActionItemDTO createActionItem(ActionItemDTO actionItemDTO) {

//      Get USER from DB
        User user = userRepository
                .findById(actionItemDTO.getAssigneeId())
                .orElseThrow(() -> new RuntimeException("User Not Found"));

//      Get Survey from DB
        Optional<Survey> survey = surveyRepository.findById(actionItemDTO.getSurveyId());
        if (survey.isEmpty()) {
            throw new RuntimeException("Survey not found");
        }

        ActionItem actionItem = modelMapper.map(actionItemDTO, ActionItem.class);
        return modelMapper.map(actionItemRepository.save(actionItem), ActionItemDTO.class);

    }

    @Override
    public List<ActionItemDTO> getAllActionItem() {
        List<ActionItem> actionItemsList = actionItemRepository.findAll();
        List<ActionItemDTO> actionItemDTOS = new ArrayList<>(List.of());

        for (ActionItem actionItem : actionItemsList) {
            actionItemDTOS.add(modelMapper.map(actionItem, ActionItemDTO.class));
        }
        return actionItemDTOS;
    }

    @Override
    public ActionItemDTO updateActionItem(UUID id, ActionItemDTO actionItemDTO) {
        ActionItem actionItem = actionItemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Action Item not found"));

        if (actionItemDTO.getDescription() != null) {
            actionItem.setDescription(actionItemDTO.getDescription());
        }

        if (actionItemDTO.getStatus() != null) {
            actionItem.setStatus(actionItemDTO.getStatus());
        }

        ActionItem updatedActionItem = actionItemRepository.save(actionItem);
        return modelMapper.map(updatedActionItem, ActionItemDTO.class);
    }

    @Override
    public ActionItemDTO getActionItemById(UUID id) {
        ActionItem actionItem = actionItemRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Action item not found"));
        return modelMapper.map(actionItem, ActionItemDTO.class);
    }
}
