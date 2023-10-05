package com.kds.chefhub.config;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.SecretKey;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
    private static final String SECRET_KEY =  "ZA6dMSi3Bpaoxg4PxfbGcJzQEd+A7u03Qk4m1gBV83mjhR75lZWjPcPc0f2Di0l0ftOT9XTXxzNyn7IO2CpWIgJdAFnZ7cf8wYyDQoTpoyhV742F4usfk2RuetH4rAWpqZqE0XnTYC57lf3mD+HDTfRUSnRlkNRXWuetm9wNFkzvsoEn3F0L1/CXfV0SjhUs9BsOCJGWw+C3S/IUlNW3RuIBbZ/talMeurKaQpAxiBuFS5xaL/yP0P7M67brvqT6DdwGx0dXCPaMXm0Fz9PYZP775XjwaZcwyLDxLKqrdDUjExOtxeMRECl7xhJBDd+etepFKxJhIqP21jK9r3HVNG3LzS3mFMGnKsbs4QRyWVY=";
    
    public <T> T extractClaim(String token, Function<Claims, T>claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }

    

    private String generateToken(
        Map<String, Object> extraClaims,
        UserDetails userDetails
        
    ) {
        return Jwts
        .builder()
        .setClaims(extraClaims)
        .setSubject(userDetails.getUsername())
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() +  43200000))
        .signWith(getSignInKey(), SignatureAlgorithm.HS256)
        .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }


   

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }


  private Claims extractAllClaims(String token){
    return Jwts
    .parserBuilder()
    .setSigningKey(getSignInKey())
    .build()
    .parseClaimsJws(token)
    .getBody();

  }

  private SecretKey getSignInKey(){
    byte[] keybytes = Decoders.BASE64.decode(SECRET_KEY);
    return Keys.hmacShaKeyFor(keybytes);
  }

    
      





}
