package lk.ijse.spring.service;

import lk.ijse.spring.dto.AdminDTO;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-26 1:47 PM
 **/

public interface AdminService {
    public ArrayList<AdminDTO> allAdmins();
    public String getAdminPassword(String userName);
    public String getAdminID(String admName);
    public String generateID();
    public void saveAdmin(AdminDTO dto);
    public void updateAdmin(AdminDTO dto);
    public void deleteAdmin(String id);
}
