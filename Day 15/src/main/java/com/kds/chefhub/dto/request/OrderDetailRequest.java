package com.kds.chefhub.dto.request;

import java.util.List;

import com.kds.chefhub.model.OrderItem;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class OrderDetailRequest {
    private Long orderid;
    private String orderduration;
    private String orderprice;
    private String ordertype;
    private String orderdate;
    private String tableno;

     private List<OrderItem> items;
    
}
