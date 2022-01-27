package com.example.shop.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "ratings")
public class ProductRating {

    @EmbeddedId
    private ProductUserId id = new ProductUserId();

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("productId")
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("userId")
    private User user;

    @Column(name = "value")
    private int value;

    @Embeddable
    @Getter
    @Setter
    @NoArgsConstructor
    @EqualsAndHashCode
    public static class ProductUserId implements Serializable {
        @Column(name = "product_id")
        private Long productId;

        @Column(name = "user_id")
        private Long userId;

        public ProductUserId(Long productId, Long userId) {
            super();
            this.productId = productId;
            this.userId = userId;
        }
    }
}
