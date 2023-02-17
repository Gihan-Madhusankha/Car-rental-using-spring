package lk.ijse.spring.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author : Gihan Madhusankha
 * 2023-02-17 12:42 AM
 * **/

@RestController
@RequestMapping("/user")
@CrossOrigin
public class User {
    public User() {
        System.out.println("User");
    }
}
