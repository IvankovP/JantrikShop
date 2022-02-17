package com.example.shop.services;

import com.example.shop.dto.ProductDto;
import com.example.shop.exceptions.ResourceNotFoundException;
import com.example.shop.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProductService {
    private final ProductRepository productRepository;

    public Set<ProductDto> findAllToDto() {
        return productRepository.findAll().stream()
                .map(ProductDto::new)
                .collect(Collectors.toSet());
    }

    public ProductDto findByIdToDto(Long id) {
        return productRepository.findById(id)
                .map(ProductDto::new)
                .orElseThrow(() -> new ResourceNotFoundException("Product with id - "
                        .concat(String.valueOf(id))
                        .concat(" not find")));
    }
}
