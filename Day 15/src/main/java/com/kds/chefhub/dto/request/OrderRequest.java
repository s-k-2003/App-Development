package com.kds.chefhub.dto.request;

import com.kds.chefhub.model.OrderDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class OrderRequest {
    private String foodid;
   private String foodname;
   private String quantity;
   private String duration;
   private String tableno;
   private String foodcategory;
   private String foodprice;
   private String orderdate;
   private String type;

   private OrderDetails orderDetails;
}
