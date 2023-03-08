package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-27 9:40 PM
 **/

public interface CarService {
    void saveCar(CarDTO dto);

    ArrayList<CarDTO> allCars();

    String generateID();

    Car searchCarByName(String carType);

    ArrayList<String> getCarTypesByName(String carName);
}
