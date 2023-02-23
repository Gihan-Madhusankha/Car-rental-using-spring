package lk.ijse.spring.controller;

import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:57 PM
 **/

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService service;

    @PostMapping
    public void saveUser(@RequestBody UserDTO dto){
        service.saveUser(dto);
    }
}
