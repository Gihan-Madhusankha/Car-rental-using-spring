package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:54 PM
 **/

public interface DriverRepo extends JpaRepository<Driver, String> {
    @Query(value = "select driverID from Driver order by driverID desc limit 1", nativeQuery = true)
    public String generateID();
}
