package com.example.supportservice.controller;

import com.example.supportservice.repository.DonationRepository;
import com.stripe.*;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin("http://localhost:3000")
public class PaymentController {

    // @Value("${stripe.secret-key}") // Add your Stripe secret key to application.properties or application.yml
    private String stripeSecretKey="sk_test_51O4GkqSCWyy5orSM5HT8Vc4m3Uni5qtDJhbSKGBpVinjjg2e5zqTuSmaLl3l7pOXNsusE05pmpkc5lzVbyTsylBU00YQkb37oW";

    @Autowired
    private DonationRepository donationRepository;

    @PostMapping("/payment-intent")
    public Map<String, String> createPaymentIntent(@RequestBody Map<String, Object> requestData) throws StripeException {
        Stripe.apiKey = stripeSecretKey;

        // Amount should be in cents
        Double amount = Double.parseDouble(requestData.get("amount").toString()) * 100;

        Map<String, Object> params = new HashMap<>();
        params.put("amount", amount.intValue());
        params.put("currency", "inr");

        PaymentIntent paymentIntent = PaymentIntent.create(params);

        Map<String, String> response = new HashMap<>();
        response.put("clientSecret", paymentIntent.getClientSecret());

        return response;
    }

    // Rest of the DonationController remains unchanged
    // ...
}