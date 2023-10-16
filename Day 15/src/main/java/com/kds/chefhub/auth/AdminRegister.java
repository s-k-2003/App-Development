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
public class AdminRegister {
    private String adminId;
    private String adminpassword;
    private Role adminrole;
}
