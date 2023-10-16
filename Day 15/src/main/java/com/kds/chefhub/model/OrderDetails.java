package com.kds.chefhub.model;

import java.util.List;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "order_details")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderid;
    private String orderduration;
    private String orderprice;
    private String ordertype;
    private String orderdate;
    private String tableno;
    
    @OneToMany(mappedBy = "orderDetails")
    private List<OrderItem> items;

    // @ManyToOne
    // @JoinColumn(name="order_id")
    // private OrderItem orderItem;

    
    

}
