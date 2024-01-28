package com.example.billservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserFinanceResponseDTO {
    
    private String investmentAmount;
    private String date;
    private String years;
    private Double minCap;
    private Double maxCap;
    private Double midCap;
    private Double minCapAmount;
    private Double maxCapAmount;
    private Double midCapAmount;
}
