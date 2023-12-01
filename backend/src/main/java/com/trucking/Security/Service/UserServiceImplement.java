package com.trucking.Security.Service;

import com.trucking.Security.Entity.User;
import com.trucking.Security.Repository.UserRepository;
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
}
