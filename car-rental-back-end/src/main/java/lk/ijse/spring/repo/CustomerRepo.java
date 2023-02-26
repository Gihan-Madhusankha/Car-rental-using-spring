package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:54 PM
 **/

public interface CustomerRepo extends JpaRepository<Customer, String> {
    @Query(value = "select password from customer where userName = ?1", nativeQuery = true)
    String getPassword(String username);
}
