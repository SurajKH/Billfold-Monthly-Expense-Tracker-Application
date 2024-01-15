package com.example.authservice.controller;

import com.example.authservice.dto.JwtAuthenticationResponse;
import com.example.authservice.dto.RequestTokenDTO;
import com.example.authservice.dto.SignInRequest;
import com.example.authservice.dto.SignUpRequest;
import com.example.authservice.entity.RefreshToken;
import com.example.authservice.entity.User;
import com.example.authservice.repository.UserRepository;
import com.example.authservice.services.AuthenticationService;
import com.example.authservice.services.JwtService;
import com.example.authservice.services.RefreshTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:3000")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private RefreshTokenService refreshTokenService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;
    @PostMapping("/signup")
    public JwtAuthenticationResponse signup(@RequestBody SignUpRequest request) {
        return authenticationService.signup(request);
    }

    @PostMapping("/signin")
    public JwtAuthenticationResponse signin(@RequestBody SignInRequest request) {      
        return authenticationService.signin(request);
    }

    @GetMapping("/signup/user")
    public List<User> allRegisteredUsers()
    {
        return userRepository.findAll();
    }

    @PostMapping("/refresh")
    public JwtAuthenticationResponse generateRefreshToken(@RequestBody RequestTokenDTO requestTokenDTO) throws Exception {
        RefreshToken refreshToken=refreshTokenService.verifyRefreshToken(requestTokenDTO.getRefreshToken());
        
        if(refreshToken!=null)
        {
            User user=refreshToken.getUser();

            String generatedAccessToken=jwtService.generateToken(user);

          return JwtAuthenticationResponse.builder()
        .refreshToken(requestTokenDTO.getRefreshToken())
        .token(generatedAccessToken)
        .build();
        
        }
          return null;
    }
    
    


}
