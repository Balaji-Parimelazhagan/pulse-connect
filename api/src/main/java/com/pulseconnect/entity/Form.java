package com.pulseconnect.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "form")
public class Form implements Serializable {

    private static final long serialVersionUID = 2L;

    @Id
    @GeneratedValue
    private UUID id;

    @Column
    private String name;

    @Column
    private String template;

    @Column
    private UUID createdBy;

    @Column
    private Date createdAt;
}