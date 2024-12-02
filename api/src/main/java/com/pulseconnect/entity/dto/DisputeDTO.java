package com.pulseconnect.entity.dto;

import com.pulseconnect.entity.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
public class DisputeDTO {
    private UUID id;

    private String snippet;

    private String description;

    @NotNull
    private UUID peerUser;

    @NotNull
    private UUID assignee;

    @NotNull
    private String priority;

    @NotNull
    private String status;

}
