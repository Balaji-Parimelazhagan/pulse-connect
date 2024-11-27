package com.pulseconnect.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pulseconnect.entity.ActionItem;

public interface ActionItemRepository extends JpaRepository<ActionItem, UUID> {

}
