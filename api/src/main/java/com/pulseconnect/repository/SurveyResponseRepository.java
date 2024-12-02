package com.pulseconnect.repository;

import java.util.List;
import java.util.UUID;

import com.pulseconnect.entity.Survey;
import com.pulseconnect.entity.SurveyResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveyResponseRepository extends JpaRepository<SurveyResponse, UUID> {
    SurveyResponse findBySurveyId(UUID id);
}
