package com.kds.chefhub.demo;



import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kds.chefhub.auth.AuthenticationResponse;
import com.kds.chefhub.auth.AuthenticationService;
import com.kds.chefhub.auth.RegisterRequest;
import com.kds.chefhub.dto.response.UserResponseDto;
import com.kds.chefhub.model.User;
import com.kds.chefhub.service.UserService;

import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class AdminController {

    private final AuthenticationService authservice;
    private final UserService service;

    @GetMapping("/staff/get")
    @PreAuthorize("hasAuthority('admin:READ')")
   public ResponseEntity<UserResponseDto> getAllUser(){
    UserResponseDto userResponseDto = service.getAllUser();
    return userResponseDto.getUsers().size()>0 ? ResponseEntity.status(200).body(userResponseDto) : ResponseEntity.status(404).body(userResponseDto); 
   }


  
    @PostMapping("/staff/add")
    @PreAuthorize("hasAuthority('admin:CREATE')")
    public ResponseEntity<AuthenticationResponse> register(
        @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(authservice.register(request));
        
    }


    // @PutMapping(value = "/staff/{username}", produces = "application/json")
    // @PreAuthorize("hasAuthority('admin:UPDATE')")
    // public ResponseEntity<AuthenticationResponse> updatestaff(@RequestBody RegisterRequest request){
    //     return ResponseEntity.ok(authservice.staffupdate(request));
    // }
   


    // @DeleteMapping
    // @PreAuthorize("hasAuthority('admin:DELETE')")
    // public String delete(){
    //     return "Delete:: admin controller";
    // }
}
