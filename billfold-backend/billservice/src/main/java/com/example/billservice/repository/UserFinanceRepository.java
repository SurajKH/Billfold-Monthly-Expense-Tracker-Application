package com.example.billservice.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.billservice.entity.UserFinance;

@Repository
public interface UserFinanceRepository extends JpaRepository<UserFinance,UUID> {
    
}
