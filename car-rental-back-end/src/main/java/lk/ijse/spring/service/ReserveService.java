package lk.ijse.spring.service;

import lk.ijse.spring.dto.ReserveDTO;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 1:47 AM
 **/

public interface ReserveService {
    public String generateReserveID();
    public void saveReserve(ReserveDTO dto);
    public ArrayList<ReserveDTO> allReserves();
}
