package lk.ijse.spring.controller;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:56 PM
 **/

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    AdminService service;

    @GetMapping
    public ResponseUtil getAllAdmins(){
        ArrayList<AdminDTO> allAdmins = service.allAdmins();
        return new ResponseUtil("200","Success", allAdmins);
    }

}
