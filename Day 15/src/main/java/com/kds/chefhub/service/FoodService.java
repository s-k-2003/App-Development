package com.kds.chefhub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.kds.chefhub.auth.FoodAdd;
import com.kds.chefhub.model.Food;
import com.kds.chefhub.repository.FoodRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FoodService {
    private final FoodRepository foodRepo;
    
    public String AddFood(FoodAdd request){
        var foods = Food.builder()
        .foodId(request.getFoodId())
        .foodname(request.getFoodname())
        .fooddescription(request.getFooddescription())
        .foodcategory(request.getFoodcategory())
        .type(request.getType())
        .foodprice(request.getFoodprice())
        .duration(request.getDuration())
        .foodimage(request.getFoodimage())
        .build();
        foodRepo.save(foods);
        return "Items Added";
    }

    public Optional<Food> getFoodById(String foodId){
        return foodRepo.findById(foodId);
    }

    public List<Food> getAllFoods(){
        return foodRepo.findAll();
    }

    public void updateFood(String id, Food updatefood){
        Food food = foodRepo.findByfoodId(id);
        if(food!=null){
            food.setFoodname(updatefood.getFoodname());
            food.setFoodcategory(updatefood.getFoodcategory());
            food.setFooddescription(updatefood.getFooddescription());
            food.setFoodprice(updatefood.getFoodprice());
            food.setDuration(updatefood.getDuration());
            food.setType(updatefood.getType());
            food.setFoodimage(updatefood.getFoodimage());
            foodRepo.save(food);
        }
    }

    public void deleteFood(String foodId){
        Food food = foodRepo.findByfoodId(foodId);
        if(food!=null){
            foodRepo.deleteById(foodId);
        }
    }
}
