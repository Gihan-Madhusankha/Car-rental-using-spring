package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:54 PM
 **/

public interface CustomerRepo extends JpaRepository<Customer, String> {
}
