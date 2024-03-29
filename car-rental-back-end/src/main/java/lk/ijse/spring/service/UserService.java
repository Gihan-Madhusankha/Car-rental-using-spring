package lk.ijse.spring.service;

import lk.ijse.spring.dto.UserDTO;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-23 9:36 PM
 **/

public interface UserService {
    public void saveUser(UserDTO dto);
    public ArrayList<String> getLastUserID();
}
