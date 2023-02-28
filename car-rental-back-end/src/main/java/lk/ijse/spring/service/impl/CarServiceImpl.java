package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-27 9:41 PM
 **/

@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepo repo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public ArrayList<CarDTO> allCars() {
        return modelMapper.map(repo.findAll(), new TypeToken<ArrayList<CarDTO>>(){}.getType());
    }

    @Override
    public String generateID() {
        return repo.generateID();
    }
}
