package com.kds.chefhub.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.kds.chefhub.model.OrderDetails;
import com.kds.chefhub.model.OrderItem;
import com.kds.chefhub.repository.OrderManagementRepository;
import com.kds.chefhub.repository.OrderSaveRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderItemsService {
    private final OrderSaveRepository itemRepo;

    public String placeOrderwaiter(OrderDetails request){
        var orderitems = OrderDetails.builder()
        .orderduration(request.getOrderduration())
        .orderdate(request.getOrderdate())
        .orderprice(request.getOrderprice())
        .ordertype("Dine In")
        .tableno(request.getTableno())
        .items(request.getItems())
        .build();
        var orderitem = request.getItems();
        itemRepo.save(orderitems);
        saveitems(orderitem, orderitems);
        return "Order Placed Successfully :"+orderitems.getOrderid();
    }

    


    private final OrderManagementRepository orderRepo;


    public void saveitems(List<OrderItem> items, OrderDetails orderitems){
        List<OrderItem> savedorders = new ArrayList<>();
        for(int i=0; i<items.size(); i++){
            var saveorder = OrderItem.builder()
            .foodid(items.get(i).getFoodid())
            .foodname(items.get(i).getFoodname())
            .quantity(items.get(i).getQuantity())
            .duration(items.get(i).getDuration())
            .tableno(items.get(i).getTableno())
            .foodcategory(items.get(i).getFoodcategory())
            .foodprice(items.get(i).getFoodprice())
            .orderdate(items.get(i).getOrderdate())
            .orderDetails(orderitems)
            .type("Dine In")
            .build();
            savedorders.add(saveorder);
        }
        orderRepo.saveAll(savedorders);

    }

    public List<OrderItem> getAllorders(){
        return orderRepo.findAllIorderItems();
    }



    //User order 

      public String placeOrderuser(OrderDetails request){
        var orderitems = OrderDetails.builder()
        .orderduration(request.getOrderduration())
        .orderdate(request.getOrderdate())
        .orderprice(request.getOrderprice())
        .ordertype("Take Away")
        .tableno("0")
        .items(request.getItems())
        .build();
        var orderitem = request.getItems();
        itemRepo.save(orderitems);
        usersaveitems(orderitem, orderitems);
        return "Order Placed Successfully :"+orderitems.getOrderid();
    }

    public void usersaveitems(List<OrderItem> items, OrderDetails orderitems){
        List<OrderItem> savedorders = new ArrayList<>();
        for(int i=0; i<items.size(); i++){
            var saveorder = OrderItem.builder()
            .foodid(items.get(i).getFoodid())
            .foodname(items.get(i).getFoodname())
            .quantity(items.get(i).getQuantity())
            .duration(items.get(i).getDuration())
            .tableno(items.get(i).getTableno())
            .foodcategory(items.get(i).getFoodcategory())
            .foodprice(items.get(i).getFoodprice())
            .orderdate(items.get(i).getOrderdate())
            .orderDetails(orderitems)
            .type("Take Away")
            .build();
            savedorders.add(saveorder);
        }
        orderRepo.saveAll(savedorders);

    }


    //Payment

    public List<OrderDetails> ordercheckout(String orderid){
        return itemRepo.findOrderById(orderid);
    }


    //END



}
