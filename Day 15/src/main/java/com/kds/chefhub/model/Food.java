package com.kds.chefhub.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "food_details")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Food {
    @Id
    private String foodId;
    private String foodname;
    private String fooddescription;
    private String foodcategory;
    private String foodprice;
    private String type;
    private String duration;
    @Column(columnDefinition = "TEXT")
    private String foodimage;
}
