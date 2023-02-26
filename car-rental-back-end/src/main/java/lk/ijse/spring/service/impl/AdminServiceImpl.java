package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.AdminDTO;
import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.repo.AdminRepo;
import lk.ijse.spring.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * @author : Gihan Madhusankha
 * 2023-02-26 1:48 PM
 **/

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo repo;
    
    @Autowired
    ModelMapper modelMapper;

    @Override
    public ArrayList<AdminDTO> allAdmins() {
        return modelMapper.map(repo.findAll(), new TypeToken<ArrayList<AdminDTO>>(){
        }.getType());
    }

    @Override
    public String generateID() {
        return repo.generateID();
    }
}
