package com.nocountry.trucking.domain.service;

import com.nocountry.trucking.controller.dto.request.LoginUser;
import com.nocountry.trucking.controller.dto.request.NewUser;
import com.nocountry.trucking.controller.dto.response.AuthenticationResponse;

/**
 * @author ROMULO
 * @package com.nocountry.trucking.domain.service
 * @license Lrpa, zephyr cygnus
 * @since 23/11/2023
 */
public interface AuthenticationService {

    AuthenticationResponse register(NewUser newUser);
    AuthenticationResponse login(LoginUser login);

}
