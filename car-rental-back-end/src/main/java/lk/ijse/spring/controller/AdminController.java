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
    public ResponseUtil saveAdmin(@RequestBody AdminDTO dto) {
        service.saveAdmin(dto);
        return new ResponseUtil("200", dto + " Added", null);
    }

    @PutMapping
    public ResponseUtil updateAdmin(@RequestBody AdminDTO dto) {
        service.updateAdmin(dto);
        return new ResponseUtil("200", dto + " Updated", null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteAdmin(String id) {
        service.deleteAdmin(id);
        return new ResponseUtil("200", id + " Deleted", null);
    }

    @GetMapping
    public ResponseUtil getAllAdmins() {
        ArrayList<AdminDTO> allAdmins = service.allAdmins();
        return new ResponseUtil("200", "Success", allAdmins);
    }

    @GetMapping(path = "/generate")
    public ResponseUtil generateID() {
        String id = service.generateID();
        return new ResponseUtil("200", "Success", id);
    }

    @GetMapping(params = {"admUserName"})
    public ResponseUtil getAdminPassword(@RequestParam String admUserName) {
        String password = service.getAdminPassword(admUserName);
        return new ResponseUtil("200", "Done", password);
    }

    @GetMapping(params = {"admName"})
    public ResponseUtil getAdminID(@RequestParam String admName) {
        String id = service.getAdminID(admName);
        return new ResponseUtil("200", "Done", id);
    }

}
