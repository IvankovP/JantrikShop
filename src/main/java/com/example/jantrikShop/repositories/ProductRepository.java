package com.example.jantrikShop.repositories;

import com.example.jantrikShop.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
