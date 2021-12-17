package com.example.jantrikShop.repositories;

import com.example.jantrikShop.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
