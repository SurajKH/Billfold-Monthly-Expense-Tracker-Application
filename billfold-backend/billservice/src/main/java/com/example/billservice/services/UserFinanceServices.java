package com.example.billservice.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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

    public List<Double> largePlanInvestments(Double minCap, Double midCap,Double maxCap,
    String investmentAmount)
    {
        minCap=(double) (Constants.TEN_TO_FIFTEEN_YEARS_AMOUNT/2);
        midCap=(double) ((Constants.TEN_TO_FIFTEEN_YEARS_AMOUNT*2)/3);
        maxCap=(double) ((Constants.TEN_TO_FIFTEEN_YEARS_AMOUNT*3)/4);

        Double minCapAmount=Double.parseDouble(investmentAmount)*minCap;
        Double midCapAmount=Double.parseDouble(investmentAmount)*midCap;
        Double maxCapAmount=Double.parseDouble(investmentAmount)*maxCap;

        return  new ArrayList<Double>(Arrays.asList(minCapAmount,midCapAmount,maxCapAmount,minCap,midCap,maxCap));
    }

    public List<Double> midPlanInvestments(Double minCap, Double midCap,Double maxCap,
    String investmentAmount)
    {
        minCap=(double) (Constants.FIVE_TO_TEN_YEARS_AMOUNT/2);
        midCap=(double) ((Constants.FIVE_TO_TEN_YEARS_AMOUNT*2)/3);
        maxCap=(double) ((Constants.FIVE_TO_TEN_YEARS_AMOUNT*3)/4);

        Double minCapAmount=Double.parseDouble(investmentAmount)*minCap;
        Double midCapAmount=Double.parseDouble(investmentAmount)*midCap;
        Double maxCapAmount=Double.parseDouble(investmentAmount)*maxCap;

        return  new ArrayList<Double>(Arrays.asList(minCapAmount,midCapAmount,maxCapAmount,minCap,midCap,maxCap));
    }

    public List<Double> smallPlanInvestments(Double minCap, Double midCap,Double maxCap,
    String investmentAmount)
    {
        minCap=(double) (Constants.TWO_TO_FIVE_YEARS_AMOUNT/2);
        midCap=(double) ((Constants.TWO_TO_FIVE_YEARS_AMOUNT*3)/4);
        maxCap=(double) ((Constants.TWO_TO_FIVE_YEARS_AMOUNT));

        Double minCapAmount=Double.parseDouble(investmentAmount)*minCap;
        Double midCapAmount=Double.parseDouble(investmentAmount)*midCap;
        Double maxCapAmount=Double.parseDouble(investmentAmount)*maxCap;

        return  new ArrayList<Double>(Arrays.asList(minCapAmount,midCapAmount,maxCapAmount,minCap,midCap,maxCap));
    }

    public UserFinanceResponseDTO userFinanceCalculation(UserFinance userFinance)
    {
        String years=userFinance.getYears();
        String investmentAmount=userFinance.getInvestmentAmount();
        Double minCap=null,maxCap=null,midCap=null,minCapAmount=null,midCapAmount=null,maxCapAmount=null;
        
        List<Double> largeInvestmentPlanAmount=new ArrayList<Double>();
        List<Double> midInvestmentPlanAmount=new ArrayList<Double>();
        List<Double> smallInvestmentPlanAmount=new ArrayList<Double>();


        if(Integer.parseInt(years)>=10 && Integer.parseInt(years)<=15)
        {
            largeInvestmentPlanAmount=largePlanInvestments(minCap,midCap,maxCap,investmentAmount);
            minCapAmount=largeInvestmentPlanAmount.get(0);
            midCapAmount=largeInvestmentPlanAmount.get(1);
            maxCapAmount=largeInvestmentPlanAmount.get(2);
            minCap=largeInvestmentPlanAmount.get(3);
            midCap=largeInvestmentPlanAmount.get(4);
            maxCap=largeInvestmentPlanAmount.get(5);
        }
        else if(Integer.parseInt(years)>=5 && Integer.parseInt(years)<10)
        {

            midInvestmentPlanAmount=midPlanInvestments(minCap,midCap,maxCap,investmentAmount);
            minCapAmount=midInvestmentPlanAmount.get(0);
            midCapAmount=midInvestmentPlanAmount.get(1);
            maxCapAmount=midInvestmentPlanAmount.get(2);
            minCap=midInvestmentPlanAmount.get(3);
            midCap=midInvestmentPlanAmount.get(4);
            maxCap=midInvestmentPlanAmount.get(5);
        }
        else if(Integer.parseInt(years)>=2 && Integer.parseInt(years)<5)
        {
            smallInvestmentPlanAmount=smallPlanInvestments(minCap,midCap,maxCap,investmentAmount);
            minCapAmount=smallInvestmentPlanAmount.get(0);
            midCapAmount=smallInvestmentPlanAmount.get(1);
            maxCapAmount=smallInvestmentPlanAmount.get(2);
            minCap=smallInvestmentPlanAmount.get(3);
            midCap=smallInvestmentPlanAmount.get(4);
            maxCap=smallInvestmentPlanAmount.get(5);
           
        }
        else 
        {
             return null;
        }

        UserFinanceResponseDTO user=new UserFinanceResponseDTO();
        
        user.setMonth(userFinance.getMonth());
        user.setInvestmentAmount(userFinance.getInvestmentAmount());
        user.setMinCap(minCap);
        user.setMidCap(midCap);
        user.setMaxCap(maxCap);
        user.setYears(years);
        user.setMinCapAmount(minCapAmount);
        user.setMidCapAmount(midCapAmount);
        user.setMaxCapAmount(maxCapAmount);
        user.setMinCapProfit(minCapAmount-Double.parseDouble(investmentAmount));
        user.setMidCapProfit(midCapAmount-Double.parseDouble(investmentAmount));
        user.setMaxCapProfit(maxCapAmount-Double.parseDouble(investmentAmount));
        userFinanceRepository.save(userFinance);
        return user;
    }
}
