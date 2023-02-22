package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * @author : Gihan Madhusankha
 * 2023-02-22 2:11 PM
 **/

@Service
@Transactional
public class CustomerServiceImpl {

    @Autowired
    CustomerRepo repo;

    @Autowired
    ModelMapper modelMapper;

    public void saveCustomer(CustomerDTO dto){
        if (repo.existsById(dto.getUserName())) {
            throw new RuntimeException(dto.getUserName()+" is Already Exists");
        }
        Customer entity = modelMapper.map(dto, Customer.class);
        repo.save(entity);
    }

}
