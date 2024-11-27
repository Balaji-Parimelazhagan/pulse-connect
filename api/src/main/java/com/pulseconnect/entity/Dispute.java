package com.pulseconnect.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "dispute")
public class Dispute {

    @Id
    @GeneratedValue
    private UUID id;

    @Column
    private String snippet;

    @Column
    private String description;

    @ManyToOne
    @JoinColumn(name = "peer_user")
    private User peerUser;

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
