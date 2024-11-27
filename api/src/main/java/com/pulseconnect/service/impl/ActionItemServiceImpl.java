package com.pulseconnect.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.pulseconnect.entity.ActionItem;
import com.pulseconnect.entity.dto.ActionItemDTO;
import com.pulseconnect.repository.ActionItemRepository;
import com.pulseconnect.service.ActionItemService;
import org.modelmapper.TypeToken;

public class ActionItemServiceImpl implements ActionItemService {

    @Autowired
    ActionItemRepository actionItemRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ActionItemDTO createActionItem() {
        return null;
    }
}
