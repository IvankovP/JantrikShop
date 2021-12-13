package com.example.jantrikShop.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "user_authentication")
public class UserAuthentication {

    @Id
    @GeneratedValue(generator = "user_authentication_seq", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "user_authentication_seq", sequenceName = "user_authentication_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "login", unique = true)
    private String login;

    @Column(name = "password")
    private String password;
}
