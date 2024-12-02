package com.pulseconnect.entity;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@MappedSuperclass
public class BaseEntity {

    @Column
    private UUID createdBy;

    @Column
    private Date createdAt;

    @Column
    private UUID updatedBy;

    @Column
    private Date updatedAt;
}
