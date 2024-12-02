package com.pulseconnect.service;

import com.pulseconnect.entity.dto.ActionItemDTO;

import java.util.List;
import java.util.UUID;

public interface ActionItemService {
    ActionItemDTO createActionItem(ActionItemDTO actionItemDTO);

    List<ActionItemDTO> getAllActionItem();

    ActionItemDTO updateActionItem(UUID id, ActionItemDTO actionItemDTO);

    ActionItemDTO getActionItemById(UUID id);
}
