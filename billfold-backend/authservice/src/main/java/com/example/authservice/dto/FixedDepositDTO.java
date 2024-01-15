package com.example.authservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Builder
@AllArgsConstructor
@Getter
@Setter
public class FixedDepositDTO {
    
    private Integer amount;
    private String date;
}
