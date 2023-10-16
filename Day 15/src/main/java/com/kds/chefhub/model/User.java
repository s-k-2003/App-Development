package com.kds.chefhub.model;

import java.util.Collection;
// import java.util.List;
import java.util.List;


import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.kds.chefhub.model.enumerate.Role;
import com.kds.chefhub.token.Token;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "_details")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails{
    @Id
    @Column(length = 26, nullable =false, unique = true)
    private String username;

    
    private String password;

    @Column(length = 13, nullable = false)
    private String firstname;

    @Column(length = 13, nullable= false )
    private String lastname;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String profileimg;

    @Column(length = 13, nullable = false)
    private String mobile;

    @Column(length = 20)
    private String status;


    

    @Enumerated(EnumType.STRING)
    private Role role;


    @OneToMany(mappedBy = "user")
    private List<Token> tokens;
    


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        
        return role.getAuthorities();
    }

    @Override
    public String getUsername(){
        return username;
    }

    @Override
    public String getPassword(){
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        
        return true;
    }

    @Override
    public boolean isEnabled() {
        
        return true;
    }


    

    
}
