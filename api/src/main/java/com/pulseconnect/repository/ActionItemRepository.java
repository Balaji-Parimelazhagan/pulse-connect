package com.pulseconnect.repository;

import com.pulseconnect.entity.ActionItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ActionItemRepository extends JpaRepository<ActionItem, UUID> {

}
