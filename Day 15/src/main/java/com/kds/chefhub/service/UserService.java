package com.kds.chefhub.service;

import org.springframework.stereotype.Service;

import com.kds.chefhub.dto.response.UserResponseDto;

@Service
public interface UserService {
    UserResponseDto getAllUser();

    
}
