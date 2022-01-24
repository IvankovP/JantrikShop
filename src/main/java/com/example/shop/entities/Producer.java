package com.example.shop.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Data
@Entity
@Table(name = "producers")
public class Producer extends DeletableEntity {
    @Id
    @GeneratedValue(generator = "producers_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "producers_seq", sequenceName = "producers_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "producer")
    private Set<Product> products;
}
