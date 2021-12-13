package com.example.jantrikShop.repositories;

import com.example.jantrikShop.entities.UserAuthentication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAuthenticatedRepository extends JpaRepository<UserAuthentication, Long> {
}
