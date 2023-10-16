package com.kds.chefhub.demo;



import java.util.List;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kds.chefhub.model.OrderDetails;
import com.kds.chefhub.service.OrderItemsService;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class UserOrderController {
    private final OrderItemsService itemService;


    @PostMapping("/user/order")
    public String placeOrderuser(@RequestBody OrderDetails request){
        return itemService.placeOrderuser(request);
    }

    @GetMapping("/user/checkout/{orderid}")
    public List<OrderDetails> ordersummary (@PathVariable String orderid){
        return itemService.ordercheckout(orderid);
    }

   
}
