package com.pulseconnect.entity;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

//import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import io.hypersistence.utils.hibernate.type.json.JsonBinaryType;
import lombok.Data;
import org.hibernate.annotations.Type;

@Data
@Entity
@Table(name = "survey_response")
public class SurveyResponse extends BaseEntity {

    @Id
    @GeneratedValue
    private UUID id;

    @Type(value = JsonBinaryType.class)
    @Column(columnDefinition = "jsonb")
    private String response;

    @Column(nullable = false)
    private UUID surveyId;

    @Column
    private UUID userId;
}
