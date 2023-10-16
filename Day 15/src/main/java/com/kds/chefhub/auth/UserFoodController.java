package com.kds.chefhub.auth;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kds.chefhub.model.Food;
import com.kds.chefhub.service.FoodService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/food")

public class UserFoodController {

    private final FoodService authservice;
    @GetMapping
    public List<Food> getAllfoods(){
        return authservice.getAllFoods();
    }
}