package com.example.shop.repositories;

import com.example.shop.dto.UserDto;
import com.example.shop.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    default List<UserDto> findAllToDto() {
        return findAll().stream().map(UserDto::new).collect(Collectors.toList());
    };
}
