package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.service.AdminService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-26 1:48 PM
 **/

@Service
@Transactional
public class AdminServiceImpl implements AdminService {



    @Override
    public ArrayList<AdminDTO> allAdmins() {
        return null;
    }
}
