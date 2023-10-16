package com.kds.chefhub.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class FoodAdd {
    private String foodId;
    private String foodname;
    private String fooddescription;
    private String foodcategory;
    private String foodprice;
    private String type;
    private String duration;
    private String foodimage;
}
