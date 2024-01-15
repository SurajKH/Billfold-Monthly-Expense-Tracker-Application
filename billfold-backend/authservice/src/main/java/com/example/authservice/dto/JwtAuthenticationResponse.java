package com.example.authservice.dto;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
public class JwtAuthenticationResponse {
    String token;
    String refreshToken;
}

