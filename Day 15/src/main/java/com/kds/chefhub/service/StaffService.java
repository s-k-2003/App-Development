package com.kds.chefhub.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kds.chefhub.model.User;
import com.kds.chefhub.model.enumerate.Role;
import com.kds.chefhub.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StaffService {
    private final UserRepository repository;
    public List<User> getAllUser(){
        return repository.findAll();
    }

    public User getUserByUsername(String username){
        return repository.findByUsername(username);
    }



   public void updatedStaff(String username, User updatedUser){
    User user = repository.findByUsername(username);
    if(!user.toString().isEmpty()){

        user.setFirstname(updatedUser.getFirstname());
        user.setLastname(updatedUser.getLastname());
        user.setMobile(updatedUser.getMobile());
        user.setProfileimg(updatedUser.getProfileimg());
        user.setStatus(updatedUser.getStatus());
        user.setRole(Role.STAFF);
        repository.save(user);
    }
    
   }

    public void deleteStaffByUsername(String username){
        User user = repository.findByUsername(username);
        if(user!=null){
            repository.delete(user);
        }
    }
}
