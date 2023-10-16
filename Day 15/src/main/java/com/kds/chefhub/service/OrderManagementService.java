package com.kds.chefhub.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.kds.chefhub.dto.request.OrderRequest;
import com.kds.chefhub.model.OrderDetails;
import com.kds.chefhub.model.OrderItem;
import com.kds.chefhub.repository.OrderManagementRepository;
import com.kds.chefhub.repository.OrderSaveRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderManagementService {
    private final OrderManagementRepository orderManagementRepository;


    public String placeOrderwaiter(OrderRequest request) {
        List<OrderItem> items = new ArrayList<>();
        var orderitems = OrderItem.builder()
        .foodid(request.getFoodid())
        .foodname(request.getFoodname())
        .quantity(request.getQuantity())
        .duration(request.getDuration())
        .tableno(request.getTableno())
        .foodcategory(request.getFoodcategory())
        .foodprice(request.getFoodprice())
        .orderdate(request.getOrderdate())
        .type("Dine In")
        .build();
        items.add(orderitems);
        var time = request.getDuration();
        var price = request.getFoodprice();
        var type = "Dine In";
        var tableno = request.getTableno();
        var date = request.getOrderdate();
        
        OrderDetails  details = saveorder(time,items,price,type,date,tableno);
        var updateorderitems = OrderItem.builder()
        .foodid(request.getFoodid())
        .foodname(request.getFoodname())
        .quantity(request.getQuantity())
        .duration(request.getDuration())
        .tableno(request.getTableno())
        .foodcategory(request.getFoodcategory())
        .foodprice(request.getFoodprice())
        .orderdate(request.getOrderdate())
        .orderDetails(details)
        .type("Dine In")
        .build();
        orderManagementRepository.save(updateorderitems);

        return "Order Placed :"+details.getOrderid();
    }

    private final OrderSaveRepository orderSaveRepository;
    public OrderDetails saveorder(String duration, List<OrderItem> details, String orderprice, String ordertype, String orderdate, String tableno){
        var saveOrder = OrderDetails.builder()
        .orderduration(duration)
        .orderprice(orderprice)
        .ordertype(ordertype)
        .orderdate(orderdate)
        .tableno(tableno)
        .items(details)
        .build();
        orderSaveRepository.save(saveOrder);
        return saveOrder;
    }

    public List<OrderDetails> getAllOrders(){
        return orderSaveRepository.findAllOrders();
    }



    //User Order Management

    public String placeOrderuser(OrderRequest request) {
        List<OrderItem> items = new ArrayList<>();
        var orderitems = OrderItem.builder()
        .foodid(request.getFoodid())
        .foodname(request.getFoodname())
        .quantity(request.getQuantity())
        .duration(request.getDuration())
        .tableno("0")
        .foodcategory(request.getFoodcategory())
        .foodprice(request.getFoodprice())
        .orderdate(request.getOrderdate())
        .type("Take Away")
        .build();
        items.add(orderitems);
        var time = request.getDuration();
        var price = request.getFoodprice();
        var type = "Take Away";;
        var date = request.getOrderdate();
        
        OrderDetails  details = usersaveorder(time,items,price,type,date);
        var updateorderitems = OrderItem.builder()
        .foodid(request.getFoodid())
        .foodname(request.getFoodname())
        .quantity(request.getQuantity())
        .duration(request.getDuration())
        .tableno(request.getTableno())
        .foodcategory(request.getFoodcategory())
        .foodprice(request.getFoodprice())
        .orderdate(request.getOrderdate())
        .orderDetails(details)
        .type("Take Away")
        .build();
        orderManagementRepository.save(updateorderitems);

        return "Order Placed :"+details.getOrderid();
    }

    public OrderDetails usersaveorder(String duration, List<OrderItem> details, String orderprice, String ordertype, String orderdate){
        var saveOrder = OrderDetails.builder()
        .orderduration(duration)
        .orderprice(orderprice)
        .ordertype(ordertype)
        .orderdate(orderdate)
        .tableno("0")
        .items(details)
        .build();
        orderSaveRepository.save(saveOrder);
        return saveOrder;
    }

    


    //END
    
}
