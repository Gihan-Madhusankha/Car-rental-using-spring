package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;
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
    public void saveCar(CarDTO dto) {
        if (repo.existsById(dto.getManageCarId())) {
            throw new RuntimeException("Car "+dto.getManageCarId()+ " id is Already Exists");
        }
        Car entity = modelMapper.map(dto, Car.class);
        repo.save(entity);
    }

    @Override
    public ArrayList<CarDTO> allCars() {
        return modelMapper.map(repo.findAll(), new TypeToken<ArrayList<CarDTO>>(){}.getType());
    }

    @Override
    public String generateID() {
        return repo.generateID();
    }
}
