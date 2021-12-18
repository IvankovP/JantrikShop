package com.example.shop.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User extends DeletableEntity {

    @Id
    @GeneratedValue(generator = "users_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "users_seq", sequenceName = "users_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email")
    private String email;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @PrimaryKeyJoinColumn
    private UserAuthentication userAuthentication;

    @OneToMany(mappedBy = "user")
    private Set<Order> orders;
}
