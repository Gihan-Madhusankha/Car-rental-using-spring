package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-26 8:59 PM
 **/

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public String generateID() {
        return repo.generateID();
    }

    @Override
    public void saveDriver(DriverDTO dto) {

        if (repo.existsById(dto.getDriverID())) {
            throw new RuntimeException("Driver " + dto.getDriverID() + " id is Already Exists.!");
        }
        Driver entity = modelMapper.map(dto, Driver.class);
        System.out.println("dto enti : "+dto);

        System.out.println("entity : " + entity);
        repo.save(entity);
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        Driver entity = modelMapper.map(dto, Driver.class);
        repo.save(entity);
    }

    @Override
    public void deleteDriver(String id) {
        repo.deleteById(id);
    }

    @Override
    public ArrayList<DriverDTO> allDrivers() {
        return modelMapper.map(repo.findAll(), new TypeToken<ArrayList<DriverDTO>>() {
        }.getType());
    }
}
