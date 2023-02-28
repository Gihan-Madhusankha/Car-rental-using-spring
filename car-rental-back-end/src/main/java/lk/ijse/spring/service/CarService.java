package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-27 9:40 PM
 **/

public interface CarService {
    public ArrayList<CarDTO> allCars();
    public String generateID();
}
