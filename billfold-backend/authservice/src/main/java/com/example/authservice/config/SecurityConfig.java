package com.example.authservice.config;

import com.example.authservice.services.UserService;
import lombok.AllArgsConstructor;

import org.apache.http.protocol.HTTP;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@AllArgsConstructor
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception
    {
    /*
        httpSecurity.csrf(csrf->csrf.disable())
            .authorizeHttpRequests(authorize->{
                authorize.requestMatchers(HttpMethod.POST,"/api/v1/signin").permitAll()
                        .requestMatchers(HttpMethod.POST,"/api/v1/signup").permitAll()
                        .requestMatchers(HttpMethod.GET,"/api/v1/signup/users").permitAll()
                        .requestMatchers(HttpMethod.POST,"/api/v1/signup/phone").permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/dashboard").permitAll()
                        .anyRequest().authenticated();
            })
        */
    httpSecurity.csrf(csrf->csrf.disable())
            .authorizeHttpRequests(authorize->{
                authorize.requestMatchers(HttpMethod.POST,"http://localhost:8080/api/v1/signin").permitAll()
                .requestMatchers(HttpMethod.POST,"http://localhost:8080/api/v1/signup").permitAll()
                .requestMatchers(HttpMethod.POST,"/api/v1/signin").permitAll()
                        .requestMatchers(HttpMethod.POST,"/api/v1/signup").permitAll()
                        .requestMatchers(HttpMethod.GET,"/api/v1/signup/**").permitAll()
                        .requestMatchers(HttpMethod.POST,"/api/v1/signup/phone").permitAll()
                        .requestMatchers(HttpMethod.POST,"/api/v1/refresh")
                        .permitAll()
                        .requestMatchers(HttpMethod.POST,"http://localhost:8081/api/v1/finance/fixed-deposits")
                        .permitAll()
                        .requestMatchers(HttpMethod.GET,"/dashboard").authenticated()
                        .anyRequest().authenticated();

                })
                .sessionManagement(manager->manager.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider())
                .addFilterBefore( jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();


    }

    @Bean
    public AuthenticationProvider authenticationProvider()
    {
        DaoAuthenticationProvider daoAuthenticationProvider=new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userService.setUserDetails());
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);
        return  daoAuthenticationProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception
    {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:8081"); // Adjust the origin to match your support service URL
        config.addAllowedOrigin("http://localhost:3000"); // Adjust the origin to match your support service
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }


}
