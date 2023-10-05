package com.kds.chefhub.auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth/staff")
@RequiredArgsConstructor
public class AuthencationController {

    private final AuthenticationService service;


    // @PostMapping("/register")
    // public ResponseEntity<AuthenticationResponse> register(
    //     @RequestBody RegisterRequest request
    // ){
    //     return ResponseEntity.ok(service.register(request));
    //     //
    // }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
        @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
        //
    }

    // Admin Controller

    @PostMapping("/admin/register")
    public ResponseEntity<AuthenticationResponse> adminregister(@RequestBody AdminRegister request){
        return ResponseEntity.ok(service.adminregister(request));
    }

    @PostMapping("/admin/authenticate")
    public ResponseEntity<AuthenticationResponse> adminAuthenticate(@RequestBody AuthenticationRequest adminrequest){
        return ResponseEntity.ok(service.adminAuthenticate(adminrequest));
    }


}
