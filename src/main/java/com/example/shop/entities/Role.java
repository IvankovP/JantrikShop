package com.example.shop.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "roles")
public class Role extends DeletableEntity {

    @Id
    @GeneratedValue(generator = "roles_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "roles_seq", sequenceName = "roles_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "name")
    private String name;
}
