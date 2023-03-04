package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:56 PM
 **/

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService service;

    @PostMapping
    public void saveCustomer(@RequestBody CustomerDTO dto) {
        service.saveCustomer(dto);
    }

    @GetMapping
    public ResponseUtil allCustomers(){
        ArrayList<CustomerDTO> allCustomers = service.allCustomers();
        return new ResponseUtil("200", "Success", allCustomers);
    }

    @GetMapping(params = {"username"})
    public ResponseUtil getPassword(@RequestParam String username){
        String password = service.getPassword(username);
        return new ResponseUtil("200", "Done", password);
    }

}
