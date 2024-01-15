package com.example.billservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.billservice.constants.Constants;
import com.example.billservice.dto.UserFinanceResponseDTO;
import com.example.billservice.entity.UserFinance;
import com.example.billservice.repository.UserFinanceRepository;

@Service
public class UserFinanceServices {
    
    @Autowired
    UserFinanceRepository userFinanceRepository;

    public UserFinanceResponseDTO userFinanceCalculation(UserFinance userFinance)
    {
        String years=userFinance.getYears();
        String investmentAmount=userFinance.getInvestmentAmount();
        Double minCap=null,maxCap=null,minCapAmount=null,maxCapAmount=null;
        

        if(Integer.parseInt(years)>=10 && Integer.parseInt(years)<=15)
        {
           minCap=(double) (Constants.TEN_TO_FIFTEEN_YEARS_AMOUNT/2);
          
           maxCap=(double) ((Constants.TEN_TO_FIFTEEN_YEARS_AMOUNT*3)/4);

           minCapAmount=Double.parseDouble(investmentAmount)*minCap;

           maxCapAmount=Double.parseDouble(investmentAmount)*maxCap;

        }
        else if(Integer.parseInt(years)>=5 && Integer.parseInt(years)<10)
        {

            minCap=(double) (Constants.FIVE_TO_TEN_YEARS_AMOUNT/2);
            maxCap=(double) ((Constants.FIVE_TO_TEN_YEARS_AMOUNT*3)/4);

            minCapAmount=Double.parseDouble(investmentAmount)*minCap;

            maxCapAmount=Double.parseDouble(investmentAmount)*maxCap;
        }
        else if(Integer.parseInt(years)>=2 && Integer.parseInt(years)<5)
        {
            minCap=(double) (Constants.TWO_TO_FIVE_YEARS_AMOUNT/2);
            maxCap=(double) ((Constants.TWO_TO_FIVE_YEARS_AMOUNT*3)/4);

            minCapAmount=Double.parseDouble(investmentAmount)*minCap;

            maxCapAmount=Double.parseDouble(investmentAmount)*maxCap;
           
        }
        else 
        {
             return null;
        }

        UserFinanceResponseDTO user=new UserFinanceResponseDTO();

        user.setDate(userFinance.getDate());
        user.setInvestmentAmount(userFinance.getInvestmentAmount());
        user.setMinCap(minCap);
        user.setMaxCap(maxCap);
        user.setYears(years);
        user.setMaxCapAmount(maxCapAmount);
        user.setMinCapAmount(minCapAmount);
        userFinanceRepository.save(userFinance);

        return user;
    }
}
