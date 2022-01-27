package com.example.shop.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "order_items")
public class OrderItem extends DeletableEntity {

    @Id
    @GeneratedValue(generator = "order_items_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "order_items_seq", sequenceName = "order_items_id_seq", allocationSize = 1)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "price")
    private Double price;

    @Column(name = "discount")
    private Double discount;

    @Column(name = "count")
    private Integer count;
}
