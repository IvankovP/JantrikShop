package com.example.shop.services;

import com.example.shop.entities.User;
import com.example.shop.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User saveOrUpdate(User user) {
        User userBD = userRepository.findById(user.getId()).orElse(null);

        if (userBD == null) userBD = user;
        else {
            userBD.setName(user.getName());
            userBD.setLastname(user.getLastname());
            userBD.setEmail(user.getEmail());
        }

        return userRepository.save(userBD);
    }
}
