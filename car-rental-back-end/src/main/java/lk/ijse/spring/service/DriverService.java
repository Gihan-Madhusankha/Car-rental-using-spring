package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-26 8:59 PM
 **/

public interface DriverService {
    public String generateID();
    public void saveDriver(DriverDTO dto);
    public ArrayList<DriverDTO> allDrivers();
}
