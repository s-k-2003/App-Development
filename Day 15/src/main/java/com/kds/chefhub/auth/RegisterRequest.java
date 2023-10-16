package com.kds.chefhub.auth;

import com.kds.chefhub.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class RegisterRequest {
    private String firstname;
    private String lastname;
    private String username;
    private String password;
    private String mobile;
    private String status;
    private String profileimg;
    private String tempid;
   
    private Role role;

}
