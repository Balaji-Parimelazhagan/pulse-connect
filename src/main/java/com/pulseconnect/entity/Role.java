package com.pulseconnect.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "role")
public class Role {

    @Id
    @GeneratedValue
    private UUID id;

    @Column
    private String name;


}
