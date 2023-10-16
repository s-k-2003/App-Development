package com.kds.chefhub.demo;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.kds.chefhub.model.OrderDetails;

import com.kds.chefhub.service.OrderItemsService;
import com.kds.chefhub.service.OrderManagementService;

import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("/api/v1/staff")
@PreAuthorize("hasRole('STAFF')")
@RequiredArgsConstructor
public class ManagementController {

    private final OrderManagementService orderService;

    private final OrderItemsService itemService;


    @GetMapping("/order/view")
    @PreAuthorize("hasAuthority('staff:READ')")
    public List<OrderDetails> orderview(){
        return orderService.getAllOrders();
    }
    // public List<OrderItem> orderview(){
    //     return itemService.getAllorders();
    // }
    




    @PostMapping("/order/waiter")
    @PreAuthorize("hasAuthority('staff:CREATE')")
    // public String placeorder(@RequestBody OrderRequest request){
    //     return orderService.placeOrderwaiter(request);
    // }

    public String placeorder(@RequestBody OrderDetails request){
        return itemService.placeOrderwaiter(request);
    }

    @PutMapping
    public String update(){
        return "Put:: staff controller";
    }
    @DeleteMapping
    public String delete(){
        return "Delete:: staff controller";
    }
}
