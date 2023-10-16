package com.kds.chefhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kds.chefhub.model.Food;


public interface FoodRepository extends JpaRepository<Food,String>{
    Food findByfoodId(String foodId);
}
