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
public class TempUserAdd {
    private String userid;
    private Role role;
}

