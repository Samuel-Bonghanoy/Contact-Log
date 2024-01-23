package com.javaNCIII.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.javaNCIII.server.exception.UserNotFoundException;
import com.javaNCIII.server.model.User;
import com.javaNCIII.server.repository.UserRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class ServerController {
    

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User user (@RequestBody User user){
        return userRepository.save(user);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    } 

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id)
    {
        return userRepository.findById(id)
            .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User user, @PathVariable Long id){
        return userRepository.findById(id)
            .map(u -> {
                u.setFirstName(user.getFirstName());
                u.setLastName(user.getLastName());
                u.setNumber(user.getNumber());
                u.setEmailAddress(user.getEmailAddress());
                u.setDescription(user.getDescription());

                return userRepository.save(u);
            }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id)
    {
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "Contact has been deleted";
    }

}
