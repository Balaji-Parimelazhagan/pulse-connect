package com.pulseconnect.controller;

import com.pulseconnect.entity.ActionItem;
import com.pulseconnect.entity.dto.ActionItemDTO;
import com.pulseconnect.service.impl.ActionItemServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("action-item")
public class ActionItemController {

    @Autowired
    ActionItemServiceImpl actionItemService;

    @PostMapping
    public ResponseEntity<ActionItemDTO> createActionItem(@Valid @RequestBody ActionItemDTO actionItemDTO) {
        ActionItemDTO actionItemDTO1 = actionItemService.createActionItem(actionItemDTO);
        return new ResponseEntity<>(actionItemDTO1, HttpStatus.OK);

    }

    @GetMapping
    public List<ActionItemDTO> getAllActionItems() {
        return actionItemService.getAllActionItem();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ActionItemDTO> getActionItemById(@PathVariable UUID id) {
        ActionItemDTO actionItem = actionItemService.getActionItemById(id);
        return new ResponseEntity<>(actionItem, HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ActionItemDTO> updateActionItem(@RequestBody ActionItemDTO actionItemDTO, @PathVariable UUID id) {
        ActionItemDTO actionItem = actionItemService.updateActionItem(id, actionItemDTO);
        return new ResponseEntity<>(actionItem, HttpStatus.OK);
    }
}
