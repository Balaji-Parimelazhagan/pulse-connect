package com.pulseconnect.controller;

import com.pulseconnect.entity.Dispute;
import com.pulseconnect.entity.dto.DisputeDTO;
import com.pulseconnect.service.DisputeService;
import com.pulseconnect.service.impl.DisputeServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("dispute")
public class DisputeController {

    @Autowired
    DisputeServiceImpl disputeService;

    @GetMapping
    public ResponseEntity<List<DisputeDTO>> getAllDispute() {
        return new ResponseEntity<>(disputeService.getAllDispute(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisputeDTO> getDisputeBtId(@PathVariable("id") UUID id) {
        return new ResponseEntity<>(disputeService.getDisputeById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DisputeDTO> createDispute(@Valid @RequestBody DisputeDTO dispute) {
        return new ResponseEntity<>(disputeService.createDispute(dispute), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<DisputeDTO> updateDispute(@PathVariable("id") UUID id, @RequestBody DisputeDTO disputeDTO) {
        return new ResponseEntity<>(disputeService.updateDispute(id, disputeDTO), HttpStatus.OK);
    }


}
