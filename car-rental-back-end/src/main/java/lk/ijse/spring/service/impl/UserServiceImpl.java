package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.UserDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.User;
import lk.ijse.spring.repo.UserRepo;
import lk.ijse.spring.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * @author : Gihan Madhusankha
 * 2023-02-23 9:36 PM
 **/

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo repo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveUser(UserDTO dto) {
        if (repo.existsById(dto.getUserID())) {
            throw new RuntimeException(dto.getUserName()+" is Already Exists");
        }
        User entity = modelMapper.map(dto, User.class);
        repo.save(entity);
    }
}
