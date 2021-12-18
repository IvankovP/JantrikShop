package com.example.shop.repositories;

import com.example.shop.entities.UserAuthentication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAuthenticatedRepository extends JpaRepository<UserAuthentication, Long> {
}
