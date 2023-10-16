package com.kds.chefhub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kds.chefhub.model.OrderItem;

public interface OrderManagementRepository extends JpaRepository<OrderItem, Long>{

     @Query("""
         SELECT  od FROM OrderItem od 
        LEFT JOIN FETCH od.orderDetails
    """)
    List<OrderItem> findAllIorderItems();

}
