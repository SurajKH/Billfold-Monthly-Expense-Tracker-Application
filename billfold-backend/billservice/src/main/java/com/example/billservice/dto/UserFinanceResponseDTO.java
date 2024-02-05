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
    private String month;
    private String years;
    private Double minCap;
    private Double maxCap;
    private Double midCap;
    private Double minCapAmount;
    private Double maxCapAmount;
    private Double midCapAmount;
    private Double minCapProfit;
    private Double midCapProfit;
    private Double maxCapProfit;
}
