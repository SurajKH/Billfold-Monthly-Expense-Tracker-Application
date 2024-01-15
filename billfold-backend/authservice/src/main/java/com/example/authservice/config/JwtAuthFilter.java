package com.example.authservice.config;

import com.example.authservice.services.JwtService;
import com.example.authservice.services.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtAuthFilter extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authHeader=request.getHeader("Authorization");
        final String jwt;


        if(StringUtils.isEmpty(authHeader) || !StringUtils.startsWithIgnoreCase(authHeader,"Bearer "))
        {
            filterChain.doFilter(request,response);
            return;
        }

        jwt=authHeader.substring(7);
        final String userEmail=jwtService.extractUserName(jwt);


        if(!StringUtils.isEmpty(userEmail) && SecurityContextHolder.getContext().getAuthentication()==null)
        {
            UserDetails userDetails=userService.setUserDetails().loadUserByUsername(userEmail);
            if(jwtService.isTokenValid(jwt,userDetails))
            {
                SecurityContext securityContextHolder=SecurityContextHolder.createEmptyContext();
                UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(
                        userDetails,null,userDetails.getAuthorities()
                );
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                securityContextHolder.setAuthentication(authenticationToken);
                filterChain.doFilter(request,response);
            }
        }
    }
}
