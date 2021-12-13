package com.example.jantrikShop.dto;

import com.example.jantrikShop.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {

    private String name;
    private String lastname;
    private String email;

    public UserDto(User user) {
        this.name = user.getName();
        this.lastname = user.getLastname();
        this.email = user.getEmail();
    }
}
