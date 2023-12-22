package com.trucking.security.service;

import com.trucking.security.entity.User;
import com.trucking.security.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImplement {

    private final UserRepository userRepository;

    public User updateUserByEmail(String emailUser, String password) {
        User user = userRepository.findByEmail(emailUser).orElseThrow(() -> new IllegalArgumentException(
                "No se encontró el usuario con el email " + emailUser
        ));

        user.setPassword(password);
        userRepository.save(user);
        return user;
    }

    public User getUserByEmail(String emailUser){
        return userRepository.findByEmail(emailUser).orElseThrow(() -> new IllegalArgumentException(
                "No se encontró el usuario con el email " + emailUser));
    }
}
