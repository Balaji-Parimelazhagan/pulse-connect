package com.pulseconnect.service;

import com.pulseconnect.entity.Dispute;
import com.pulseconnect.entity.dto.DisputeDTO;

import java.util.List;
import java.util.UUID;

public interface DisputeService {
    List<DisputeDTO> getAllDispute();
    DisputeDTO getDisputeById(UUID id);
    DisputeDTO createDispute(DisputeDTO dispute);
    DisputeDTO updateDispute(UUID id,DisputeDTO disputeDTO);
}
