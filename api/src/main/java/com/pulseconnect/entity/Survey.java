package com.pulseconnect.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "survey")
public class Survey implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private UUID id;

    @Column
    private String title;

    @ManyToOne(fetch = FetchType.EAGER)
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
