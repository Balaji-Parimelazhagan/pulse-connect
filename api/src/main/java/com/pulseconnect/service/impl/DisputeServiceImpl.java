package com.pulseconnect.service.impl;

import com.pulseconnect.entity.Dispute;
import com.pulseconnect.entity.User;
import com.pulseconnect.entity.dto.DisputeDTO;
import com.pulseconnect.repository.DisputeRepository;
import com.pulseconnect.repository.UserRepository;
import com.pulseconnect.service.DisputeService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DisputeServiceImpl implements DisputeService {

    @Autowired
    DisputeRepository disputeRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ModelMapper modelMapper;

    public DisputeDTO createDispute(DisputeDTO disputeDTO) {
        Dispute dispute = modelMapper.map(disputeDTO, Dispute.class);

        Optional<User> peerUser = userRepository.findById(disputeDTO.getPeerUser());
        if (peerUser.isEmpty()) throw new RuntimeException("PeerUser not found");

        Optional<User> assignee = userRepository.findById(disputeDTO.getAssignee());
        if (assignee.isEmpty()) throw new RuntimeException("Assignee not found");

        dispute.setPeerUser(peerUser.get());
        dispute.setAssignee(assignee.get());


        Dispute disputeRes = disputeRepository
                .save(dispute);

        TypeMap<Dispute, DisputeDTO> typeMap = modelMapper.typeMap(Dispute.class, DisputeDTO.class);

        typeMap.addMappings(mapper -> {
            mapper.map((src) -> src.getPeerUser().getId(), DisputeDTO::setPeerUser);
            mapper.map((src) -> src.getAssignee().getId(), DisputeDTO::setAssignee);
        });

        return typeMap.map(disputeRes);
    }

    public DisputeDTO updateDispute(UUID id, DisputeDTO disputeDTO) {
        Optional<Dispute> dispute = disputeRepository.findById(id);
        if(dispute.isEmpty()) throw new RuntimeException("Dispute not found");
        if(disputeDTO.getStatus() != null) dispute.get().setStatus(disputeDTO.getStatus());
        if(disputeDTO.getPriority() !=null) dispute.get().setPriority(disputeDTO.getPriority());
        Dispute updatedDispute = disputeRepository.save(dispute.get());
        return modelMapper.map(updatedDispute, DisputeDTO.class);
    }

    public List<DisputeDTO> getAllDispute() {
        List<Dispute> disputes = disputeRepository.findAll();
        List<DisputeDTO> disputeDTOS = new ArrayList<>();
        for (Dispute dispute : disputes) {
            disputeDTOS.add(modelMapper.map(dispute, DisputeDTO.class));
        }
        return disputeDTOS;
    }

    public DisputeDTO getDisputeById(UUID id) {
        Dispute dispute = disputeRepository.findById(id).orElseThrow(() -> new RuntimeException("Dispute not found"));
        return modelMapper.map(dispute, DisputeDTO.class);
    }
}
