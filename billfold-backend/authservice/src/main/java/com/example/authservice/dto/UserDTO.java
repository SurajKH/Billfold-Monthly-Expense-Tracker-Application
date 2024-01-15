package com.example.authservice.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDTO {

    String firstname;
    String lastname;
    String useremail;
}
