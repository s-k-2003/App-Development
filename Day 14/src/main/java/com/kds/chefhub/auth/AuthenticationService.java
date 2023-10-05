package com.kds.chefhub.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kds.chefhub.config.JwtService;
import com.kds.chefhub.model.Admin;
import com.kds.chefhub.model.User;
import com.kds.chefhub.model.enumerate.Role;
import com.kds.chefhub.repository.AdminRepository;
import com.kds.chefhub.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final AdminRepository adminRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final AuthenticationManager staffAuthenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .username(request.getUsername())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.STAFF)
        .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
        .token(jwtToken)

        .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
       staffAuthenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
       );
        var user = repository.findById(request.getUsername()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse staffupdate(RegisterRequest updaterequest){
        var updatedetails = User.builder()
        .firstname(updaterequest.getFirstname())
        .lastname(updaterequest.getLastname())
        .username(updaterequest.getUsername())
        .password(passwordEncoder.encode(updaterequest.getPassword()))
        .role(Role.STAFF)
        .build();
        repository.save(updatedetails);
        return AuthenticationResponse.builder().build();

    }


    // Admin Service


    public AuthenticationResponse adminregister(AdminRegister request){
        var admin =  Admin.builder()
        .adminId(request.getAdminId())
        .adminpassword(passwordEncoder.encode(request.getAdminpassword()))
        .adminrole(Role.ADMIN)
        .build();
        adminRepo.save(admin);
        var jwtToken = jwtService.generateToken(admin);

        return AuthenticationResponse.builder()
        .token(jwtToken)

        .build();
    }

    public AuthenticationResponse adminAuthenticate(AuthenticationRequest adminrequest){
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(adminrequest.getAdminId(), adminrequest.getAdminpassword())
        );
        var admin = adminRepo.findById(adminrequest.getAdminId()).orElseThrow();
        var adminToken = jwtService.generateToken(admin);
        return AuthenticationResponse.builder().token(adminToken).build();
    
    }

   
    
}
