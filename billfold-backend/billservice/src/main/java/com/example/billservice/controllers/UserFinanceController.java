package com.example.billservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.billservice.dto.ErrorResponseDTO;
import com.example.billservice.dto.UserFinanceResponseDTO;
import com.example.billservice.entity.UserFinance;
import com.example.billservice.services.UserFinanceServices;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/finance")
public class UserFinanceController {

    @Autowired
    private UserFinanceServices userFinanceServices;
    
    @PostMapping("/fixed-deposits")
    public ResponseEntity<?> postMethodName(@RequestBody UserFinance userFinance) {   
             
        UserFinanceResponseDTO user=userFinanceServices.userFinanceCalculation(userFinance);
        if(user==null)
        {
            return new ResponseEntity<>(new ErrorResponseDTO("Please select a valid year, for fixed -deposit plans"),HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(user,HttpStatus.ACCEPTED);
    }
    
}
