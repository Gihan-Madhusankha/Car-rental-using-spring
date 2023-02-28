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
    public String getAdminPassword(String userName) {
        return repo.getAdminPassword(userName);
    }

    @Override
    public String generateID() {
        return repo.generateID();
    }

    @Override
    public void saveAdmin(AdminDTO dto) {
        if (repo.existsById(dto.getAdminID())) {
            throw new RuntimeException("Admin "+dto.getAdminID()+ " id is Already Exists");
        }
        Admin entity = modelMapper.map(dto, Admin.class);
        repo.save(entity);
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        Admin entity = modelMapper.map(dto, Admin.class);
        repo.save(entity);
    }

    @Override
    public void deleteAdmin(String id) {
        repo.deleteById(id);
    }
}
