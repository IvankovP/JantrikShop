package com.example.shop.controllers;

import com.example.shop.dto.ProductDto;
import com.example.shop.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductRepository productRepository;

    @GetMapping
    public List<ProductDto> getAllProducts() {
        return productRepository.findAll().stream().map(ProductDto::new).collect(Collectors.toList());
    }
}
