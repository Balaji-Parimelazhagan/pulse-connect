package com.pulseconnect.repository;


import com.pulseconnect.entity.Dispute;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface DisputeRepository extends JpaRepository<Dispute, UUID> {
}
