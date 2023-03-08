package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:56 PM
 **/

@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarController {

    @Autowired
    CarService service;

    @PostMapping
    public ResponseUtil saveCar(@RequestBody CarDTO dto) {
        service.saveCar(dto);
        return new ResponseUtil("200", "Success", null);
    }

    @GetMapping(path = "/generate")
    public ResponseUtil generateID() {
        String id = service.generateID();
        return new ResponseUtil("200", "Success", id);
    }

    @GetMapping
    public ResponseUtil allCars() {
        ArrayList<CarDTO> allCars = service.allCars();
        return new ResponseUtil("200", "Success", allCars);
    }

    @GetMapping(params = "carName")
    public ResponseUtil getCarTypesByName(String carName){
        ArrayList<String> carTypes = service.getCarTypesByName(carName);
        return new ResponseUtil("200"," Success.!", carTypes);
    }

    @GetMapping(path = "/c", params = "carType")
    public ResponseUtil searchCarByName(String carType){
        System.out.println("1");
        Car car = service.searchCarByName(carType);
        System.out.println("2");
        return new ResponseUtil("200"," Success.!",car);
    }

}
