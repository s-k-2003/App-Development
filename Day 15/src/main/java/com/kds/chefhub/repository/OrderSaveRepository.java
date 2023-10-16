package com.kds.chefhub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kds.chefhub.model.OrderDetails;

public interface OrderSaveRepository extends JpaRepository<OrderDetails, Long>{
    @Query("""
         SELECT  od FROM OrderDetails od 
        LEFT JOIN FETCH od.items
    """)
    List<OrderDetails> findAllOrders();

    @Query("""
        SELECT t FROM OrderDetails t 
        INNER JOIN t.items oi 
        INNER JOIN oi.orderDetails o 
        WHERE o.id = :orderid
    """)
    List<OrderDetails> findOrderById(String orderid);
    


}
