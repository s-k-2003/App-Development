package com.kds.chefhub.demo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/v1/staff")

public class ManagementController {
     @GetMapping
    public String get(){
        return "Get:: staff controller";
    }
    @PostMapping
    public String post(){
        return "Post:: staff controller";
    }

    @PutMapping
    public String update(){
        return "Put:: staff controller";
    }
    @DeleteMapping
    public String delete(){
        return "Delete:: staff controller";
    }
}
