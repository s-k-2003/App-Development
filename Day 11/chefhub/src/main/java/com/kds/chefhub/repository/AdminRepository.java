package com.kds.chefhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kds.chefhub.model.Admin;



public interface AdminRepository extends JpaRepository<Admin,String>{
    
}
