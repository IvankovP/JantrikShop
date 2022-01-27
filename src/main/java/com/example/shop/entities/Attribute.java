package com.example.shop.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "attributes")
public class Attribute extends DeletableEntity {

    @Id
    @GeneratedValue(generator = "attributes_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "attributes_seq", sequenceName = "attributes_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "attribute")
    private Set<AttributeValue> values;
}
