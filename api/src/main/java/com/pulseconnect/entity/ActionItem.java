package com.pulseconnect.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.UUID;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name = "actionItem")
@Builder
public class ActionItem extends BaseEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @Column
    private String snippet;

    @Column
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "survey")
    private Survey survey;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assignee")
    private User assignee;

    @Column
    private String priority;

    @Column
    private String status;
}
