package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:56 PM
 **/

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService service;

    @PostMapping
    public ResponseUtil saveDriver(@RequestBody DriverDTO dto) {
        service.saveDriver(dto);
        return new ResponseUtil("200", "Added", null);
    }

    @PutMapping
    public ResponseUtil updateDriver(@RequestBody DriverDTO dto){
        service.updateDriver(dto);
        return new ResponseUtil("200", "Updated", null);
    }

    @DeleteMapping(params = {"dId"})
    public ResponseUtil deleteDriver(String dId){
        service.deleteDriver(dId);
        return new ResponseUtil("200", "Deleted", null);
    }

    @GetMapping
    public ResponseUtil allDrivers() {
        ArrayList<DriverDTO> allDrivers = service.allDrivers();
        return new ResponseUtil("200","Success", allDrivers);
    }

    @GetMapping(path = "/generate")
    public ResponseUtil generateID() {
        String newID = service.generateID();
        return new ResponseUtil("200", "Success", newID);
    }

}
