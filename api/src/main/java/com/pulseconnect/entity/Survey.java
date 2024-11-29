package com.pulseconnect.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "survey")
public class Survey {

    @Id
    @GeneratedValue
    private UUID id;

    @Column
    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "form")
    private Form form;

    @Column
    private String description;

    @Column
    private String status;

    @Column
    private UUID createdBy;

    @Column
    private Date createdAt;
}
