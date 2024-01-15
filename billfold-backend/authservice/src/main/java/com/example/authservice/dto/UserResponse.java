package com.example.authservice.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponse {
    String status;
    String message;
}
