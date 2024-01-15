package com.example.authservice.services;

import java.security.Key;
import java.time.Instant;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.authservice.entity.RefreshToken;
import com.example.authservice.entity.User;
import com.example.authservice.repository.RefreshTokenRepository;
import com.example.authservice.repository.UserRepository;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class RefreshTokenService {

    //public long refreshTokenValidity=5*60*60*10000;
   // private final long expirationMs=100000;

    public long refreshTokenValidity=100000;


    public String secretKey="365eb0e5dfd81c9663953447439c471655203eb26c5577364e38c5edbd05fa2f";
    
    @Autowired
    private RefreshTokenRepository refreshTokenRepository;

    @Autowired
    private UserRepository userRepository;

     private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public RefreshToken createRefreshToken(String emailId)
    {
       
        // we create a new refresh token, only if it is null or else we update the 
        //existing refresh token.
        User user= userRepository.findByEmail(emailId).get();
        RefreshToken refreshTokenfromDB=user.getRefreshToken();
        //System.out.println("Refresh Token from DB: "+refreshTokenfromDB);
      //  System.out.println("User found: "+user.getRefreshToken().getRefreshToken());
        if(refreshTokenfromDB==null)
        {
         String refreshJwtToken=Jwts
                                .builder()
                                .setSubject(emailId)
                                .setIssuedAt(new Date(System.currentTimeMillis()))
                                .setExpiration(new Date(System.currentTimeMillis() + refreshTokenValidity))
                                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                                .compact();

        RefreshToken refreshToken=RefreshToken.builder().refreshToken(refreshJwtToken)
        .expiry(Instant.now().plusMillis(refreshTokenValidity))
        .user(user)
        .build();

       refreshTokenRepository.save(refreshToken);
       // save user details as well.
        User existingUser= userRepository.findByEmail(emailId).get();
        existingUser.setRefreshToken(refreshToken);
        userRepository.save(existingUser);
       return refreshToken;
        }
        // we are building the refresh_token over here.  
       else
       {
        refreshTokenfromDB.setExpiry(Instant.now().plusMillis(refreshTokenValidity));
       }
       refreshTokenRepository.save(refreshTokenfromDB);
       return refreshTokenfromDB;
    }

    public RefreshToken verifyRefreshToken(String refreshToken) throws Exception
    {
        // lets verify the refresh token over here.
        RefreshToken verifyRefreshToken=refreshTokenRepository
        .findByRefreshToken(refreshToken).orElseThrow(()->new RuntimeException("Given Token does not exist in DB"));
       if(verifyRefreshToken.getExpiry().compareTo(Instant.now())<0)
       {
        // here it states that the refresh token is expired.
        throw new Exception("Refresh Token is Expired.");
       }
       else
       {
        // here it stats that the token is verified over here.
        return verifyRefreshToken;
       }
    }




}
