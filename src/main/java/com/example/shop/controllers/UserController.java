package com.example.shop.controllers;

import com.example.shop.dto.UserDto;
import com.example.shop.entities.User;
import com.example.shop.exceptions.ResourceNotFoundException;
import com.example.shop.repositories.UserRepository;
import com.example.shop.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;

    @GetMapping("/all")
    public List<UserDto> getAllUsers() {
        return userRepository.findAllToDto();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) throws ResourceNotFoundException {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Пользователь с указанным ID не найден"));
    }

    @PostMapping("/add")
    public User getUser(@RequestBody User user) {
        return userService.saveOrUpdate(user);
    }
}
