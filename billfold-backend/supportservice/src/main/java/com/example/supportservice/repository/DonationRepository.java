package com.example.supportservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.supportservice.entity.Donation;

public interface DonationRepository extends JpaRepository<Donation,Long> {
    
}
