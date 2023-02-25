package lk.ijse.spring.controller;

import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.service.UserService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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

    @GetMapping(params = {"sample"})
    public ResponseUtil getLastUserID(@RequestParam String sample) {
        ArrayList<String> allIDs = service.getLastUserID();
        return new ResponseUtil("200", "Done", allIDs);
    }
}
