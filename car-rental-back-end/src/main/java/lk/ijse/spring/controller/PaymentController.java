package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.PaymentDTO;
import lk.ijse.spring.service.PaymentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 10:16 AM
 **/

@RestController
@RequestMapping("/payment")
@CrossOrigin
public class PaymentController{

    @Autowired
    PaymentService service;

    @PostMapping
    public ResponseUtil savePayment(@RequestBody PaymentDTO dto){
        service.savePayment(dto);
        return new ResponseUtil("200", "Success", null);
    }

    @GetMapping
    public ResponseUtil allPayments(){
        ArrayList<PaymentDTO> all = service.allPayments();
        return new ResponseUtil("200", "Success", all);
    }

    @GetMapping(path = "/generate")
    public ResponseUtil generateID() {
        String id = service.generateID();
        return new ResponseUtil("200", "Success", id);
    }

}
