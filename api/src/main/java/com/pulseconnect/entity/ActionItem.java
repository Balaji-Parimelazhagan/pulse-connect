package com.pulseconnect.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "form")
public class ActionItem {

    @Id
    @GeneratedValue
    private UUID id;

    @Column
    private String snippet;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "survey")
    private Survey survey;

    @ManyToOne
    @JoinColumn(name = "assignee")
    private User assignee;

    @Column
    private String priority;

    @Column
    private String status;

    @Column
    private UUID createdBy;

    @Column
    private Date createdAt;

    @Column
    private UUID updatedBy;

    @Column
    private Date updatedAt;
}
