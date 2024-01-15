package com.example.authservice.entity;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Entity
@Builder
@NoArgsConstructor
@Table(name="refresh_token_table")
public class RefreshToken {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int tokenId;
    
    private String refreshToken;
    private Instant expiry;

    @OneToOne
    private User user;
    
}
