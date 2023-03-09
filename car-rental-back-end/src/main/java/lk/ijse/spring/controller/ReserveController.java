package lk.ijse.spring.controller;

import lk.ijse.spring.dto.ReserveDTO;
import lk.ijse.spring.service.ReserveService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 1:45 AM
 **/

@RestController
@RequestMapping("/reserve")
@CrossOrigin
public class ReserveController {

    @Autowired
    ReserveService service;

    @PostMapping
    public ResponseUtil saveReserve(@RequestBody ReserveDTO dto) {
        service.saveReserve(dto);
        return new ResponseUtil("200", "Added", null);
    }

    @GetMapping("/generate")
    public ResponseUtil generateReserveID() {
        String id = service.generateReserveID();
        return new ResponseUtil("200", "Success", id);
    }

}
