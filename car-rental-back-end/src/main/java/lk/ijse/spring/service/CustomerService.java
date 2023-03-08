package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-22 2:20 PM
 **/

public interface CustomerService {
    public void saveCustomer(CustomerDTO dto);
    public Customer findCustomerByName(String username);
    public ArrayList<CustomerDTO> allCustomers();
}
