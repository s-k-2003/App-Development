package com.kds.chefhub.demo;



import java.util.List;


import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kds.chefhub.auth.AuthenticationService;
import com.kds.chefhub.auth.RegisterRequest;

import com.kds.chefhub.model.User;
import com.kds.chefhub.service.StaffService;

import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {

    private final AuthenticationService authservice;
    private final StaffService staffservice;

    @GetMapping("/staff/get")
    @PreAuthorize("hasAuthority('admin:READ')")
    // public String get(){
    //     return "GET::Staff";
    // }
    public List<User> getAllUsers(){
        List<User> userlist =  staffservice.getAllUser();
        return userlist;
    }
    // public ResponseEntity<UserResponseDto> getAllUser(){
    //     UserResponseDto userResponseDto = service.getAllUser();
    //     return userResponseDto.getUsers().size()>0 ? ResponseEntity.status(200).body(userResponseDto) : ResponseEntity.status(404).body(userResponseDto); 
    //    }

    @GetMapping("/staff/get/{username}")
    @PreAuthorize("hasAuthority('admin:READ')")
    public User getUser(@PathVariable String username){
        return staffservice.getUserByUsername(username);
    }


  
    @PostMapping("/staff/add")
    @PreAuthorize("hasAuthority('admin:CREATE')")
    public String register(
        @RequestBody RegisterRequest request
    ){
        return authservice.register(request);
        
    }


    @PutMapping(value = "update/staff/{username}", produces = "application/json")
    @PreAuthorize("hasAuthority('admin:UPDATE')")
    public String updateStaff(@PathVariable String username, @RequestBody User updatedUser){
        staffservice.updatedStaff(username, updatedUser);
        String updatemessage = "Staff "+username+ " Updated";
        return updatemessage;
    }
   


    @DeleteMapping("/delete/staff/{username}")
    @PreAuthorize("hasAuthority('admin:DELETE')")
    public String  deleteStaff(@PathVariable String username){
        staffservice.deleteStaffByUsername(username);
        String message = "Staff "+username + " Deleted Successfully";
        return message;
    }

}
