package com.kds.chefhub.auth;



import java.util.List;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kds.chefhub.token.Token;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth/staff")
@RequiredArgsConstructor
public class AuthencationController {

    private final AuthenticationService service;
    


   

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
        @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }

    // Admin Controller

    @PostMapping("/admin/register")
    public String adminregister(@RequestBody RegisterRequest request){
        String createdmessage = service.adminRegister(request);
        
        return createdmessage;
    }




    @GetMapping("/get/token/{username}")
    // public String get(){
    //     return "GET::TOKEN";
    // }
    public List<Token> getToken(@PathVariable String username ){
        return service.findToken(username);
    }

    




}
