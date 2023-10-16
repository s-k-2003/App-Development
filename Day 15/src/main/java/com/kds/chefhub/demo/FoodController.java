package com.kds.chefhub.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.kds.chefhub.auth.FoodAdd;
import com.kds.chefhub.model.Food;
import com.kds.chefhub.service.FoodService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class FoodController {

    private final FoodService authservice;

    @GetMapping("/food/get/{foodId}")
    @PreAuthorize("hasAuthority('admin:READ')")
    public Optional fooddata(@PathVariable String foodId){
        return authservice.getFoodById(foodId);
    }

    @GetMapping("food/get")
    @PreAuthorize("hasAuthority('admin:READ')")
    public List<Food> getAllfoods(){
        return authservice.getAllFoods();
    }




    @PostMapping("/food/add")
    @PreAuthorize("hasAuthority('admin:CREATE')")
    public String AddFood(@RequestBody FoodAdd foods){
        return authservice.AddFood(foods);
    }

    @PutMapping("/food/update/{id}")
    @PreAuthorize("hasAuthority('admin:UPDATE')")
    public String UpdateFood(@PathVariable String id, @RequestBody Food updatefood){
        authservice.updateFood(id, updatefood);
        String updatemessage = "Item Updated";
        return updatemessage;
    }

    @DeleteMapping("/food/delete/{id}")
    @PreAuthorize("hasAuthority('admin:DELETE')")
    public String deleteFood(@PathVariable String id){
        authservice.deleteFood(id);
        return "Item Deleted";
    }
}
