package lk.ijse.spring.controller;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.service.AdminService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public void saveAdmin(@RequestBody AdminDTO dto){
        service.saveAdmin(dto);
    }

    @PutMapping
    public void updateAdmin(@RequestBody AdminDTO dto){
        service.updateAdmin(dto);
    }

    @GetMapping
    public ResponseUtil getAllAdmins(){
        ArrayList<AdminDTO> allAdmins = service.allAdmins();
        return new ResponseUtil("200","Success", allAdmins);
    }

    @GetMapping(path = "/generate")
    public ResponseUtil generateID(){
        String id = service.generateID();
        return new ResponseUtil("200", "Success", id);
    }

}
