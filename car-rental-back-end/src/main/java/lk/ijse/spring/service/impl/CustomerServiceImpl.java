package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-22 2:11 PM
 **/

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo repo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveCustomer(CustomerDTO dto){
        if (repo.existsById(dto.getUserName())) {
            throw new RuntimeException(dto.getUserName()+" is Already Exists");
        }
        Customer entity = modelMapper.map(dto, Customer.class);
        repo.save(entity);
    }

    @Override
    public Customer findCustomerByName(String username) {
        return repo.findCustomerByName(username);
    }

    @Override
    public ArrayList<CustomerDTO> allCustomers() {
        return modelMapper.map(repo.findAll(), new TypeToken<ArrayList<CustomerDTO>>(){}.getType());
    }

}
