package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 4:11 PM
 **/

public interface PaymentRepo extends JpaRepository<Payment, String> {
    @Query(value = "select paymentID from Payment order by paymentID desc limit 1", nativeQuery = true)
    String generateID();
}
