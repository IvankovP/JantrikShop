package com.example.shop.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AuthenticatedController {

    @GetMapping("/")
    public String getMainPage() {
        return "Главная страница";
    }

    @PostMapping("/auth")
    public void checkAuthenticatedUser() {

    }
}
