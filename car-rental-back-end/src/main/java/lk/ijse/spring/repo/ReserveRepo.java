package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 1:46 AM
 **/

public interface ReserveRepo extends JpaRepository<Reserve, String> {
    @Query(value = "select reserveID from Reserve order by reserveID desc limit 1", nativeQuery = true)
    String generateID();
}
