package com.javaNCIII.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javaNCIII.server.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
