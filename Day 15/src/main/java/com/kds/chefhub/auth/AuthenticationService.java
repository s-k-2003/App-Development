package com.kds.chefhub.auth;


import java.util.List;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kds.chefhub.config.JwtService;


import com.kds.chefhub.model.User;
import com.kds.chefhub.model.enumerate.Role;


import com.kds.chefhub.repository.TokenRepository;
import com.kds.chefhub.repository.UserRepository;
import com.kds.chefhub.token.Token;
import com.kds.chefhub.token.TokenType;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    
    
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager staffAuthenticationManager;




    //Staff Service
    private final UserRepository repository;
    

    public String register(RegisterRequest request) {
        var user = User.builder()
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .username(request.getUsername())
        .password(passwordEncoder.encode(request.getPassword()))
        .mobile(request.getMobile())
        .status(request.getStatus())
        .profileimg(request.getProfileimg())
        .role(Role.STAFF)
        .build();
        repository.save(user);
        return "Staff Added Successfully";
    }

    public String adminRegister(RegisterRequest request){
        var admin = User.builder()
        .firstname(request.getFirstname())
        .lastname(request.getLastname())
        .username(request.getUsername())
        .password(passwordEncoder.encode(request.getPassword()))
        .mobile(request.getMobile())
        .status(request.getStatus())
        .profileimg(request.getProfileimg())
        .role(Role.ADMIN)
        .build();
        repository.save(admin);
        return "Admin Created Successfully";
    }



    public AuthenticationResponse authenticate(AuthenticationRequest request) {
       staffAuthenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
       );
        var user = repository.findById(request.getUsername()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        revokeAlUserTokens(user);
        saveUserToken(user, jwtToken);
        
        return AuthenticationResponse.builder().token(jwtToken).build();
    }


    


 
     //Saved Token

     private final TokenRepository tokenRepo;

     public void saveUserToken(User user, String jwtToken){
        var token = Token.builder().user(user).token(jwtToken).tokenType(TokenType.BEARER).revoked(false).expired(false).build();

        tokenRepo.save(token);

    }
    


    // Admin Service
    

    

    //Token Revoked

    private void revokeAlUserTokens(User user){
        var validUserToken = tokenRepo.findAllValidTokensByUser(user.getUsername());
        if(validUserToken.isEmpty())
            return;
        
        validUserToken.forEach(u -> {
            u.setExpired(true);
            u.setRevoked(true);
        });
        tokenRepo.saveAll(validUserToken);
        
        
    }

    //Token Data
    public List<Token> findToken(String username){
        // System.out.println(tokenRepo.findById(username).toString());
        return tokenRepo.findAllValidTokensByUser(username);
    } 

    
  


//END

}











