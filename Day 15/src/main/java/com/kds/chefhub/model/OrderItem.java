package com.kds.chefhub.model;

     

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "order_items")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int defaultid;
   private String foodid;
   private String foodname;
   private String quantity;
   private String duration;
   private String tableno;
   private String foodcategory;
   private String foodprice;
   private String orderdate;
   private String type;
  
  
   
    
   

    @ManyToOne
    @JsonIgnoreProperties("items")
    @JoinColumn(name = "order_id")
    private OrderDetails orderDetails;
}
