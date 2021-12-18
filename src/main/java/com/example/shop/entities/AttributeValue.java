package com.example.shop.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Data
@Entity
@Table(name = "attribute_values")
public class AttributeValue extends DeletableEntity {

    @Id
    @GeneratedValue(generator = "attribute_values_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "attribute_values_seq", sequenceName = "attribute_values_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "value")
    private String value;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attribute_id")
    private Attribute attribute;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;
}
