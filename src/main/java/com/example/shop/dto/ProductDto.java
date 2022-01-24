package com.example.shop.dto;

import com.example.shop.entities.Image;
import com.example.shop.entities.Product;
import com.example.shop.entities.ProductRating;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.annotation.PostConstruct;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class ProductDto {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private Integer discountPercentage;
    private boolean newArrival;
    private Set<Image> images;
    private Image mainImage;
    private int rating;
    private int countRatingVotes;

    public ProductDto(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.price = product.getPrice();
        this.discountPercentage = product.getDiscountPercentage();
        this.newArrival = product.isNewArrival();
        this.images = product.getImages();
        this.mainImage = product.getImages() == null ? null : product.getImages().stream()
                .filter(Image::isMain)
                .findFirst()
                .orElse(null);
        this.countRatingVotes = product.getRatings() == null ? 0 : product.getRatings().size();
        this.rating = this.countRatingVotes == 0 ? 0 : product.getRatings().stream()
                .mapToInt(ProductRating::getValue)
                .sum();
    }
}
