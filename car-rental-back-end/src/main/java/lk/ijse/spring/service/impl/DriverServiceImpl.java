package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

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
        repo.save(entity);
    }
}
