package com.pulseconnect.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;
import java.util.UUID;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name = "dispute")
public class Dispute extends BaseEntity {

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

    @Column(nullable = false)
    private String priority;

    @Column(nullable = false)
    private String status;

}
