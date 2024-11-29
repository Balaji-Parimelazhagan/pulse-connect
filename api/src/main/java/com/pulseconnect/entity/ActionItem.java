package com.pulseconnect.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "actionItem")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ActionItem {

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

    @Column
    private UUID createdBy;

    @Column
    private Date createdAt;

    @Column
    private UUID updatedBy;

    @Column
    private Date updatedAt;
}
