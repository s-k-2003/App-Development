package com.kds.chefhub.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kds.chefhub.dto.response.UserResponseDto;
import com.kds.chefhub.model.User;
import com.kds.chefhub.repository.UserRepository;
import com.kds.chefhub.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceimpl implements UserService{

    private final UserRepository userRepo;

    @Override
    public UserResponseDto getAllUser() {
       
        List<User> userList = userRepo.findAll();
        UserResponseDto userResponse = new UserResponseDto();
        userResponse.setUsers(userList);
        return userResponse;
        
    }
    
}
