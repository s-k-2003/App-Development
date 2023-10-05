package com.kds.chefhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kds.chefhub.model.User;

public interface UserRepository extends JpaRepository<User,String>{

   
    
}
