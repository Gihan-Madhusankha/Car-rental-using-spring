package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:54 PM
 **/

public interface CarRepo extends JpaRepository<Car, String> {
    @Query(value = "select manageCarId from Car order by manageCarId desc limit 1", nativeQuery = true)
    public String generateID();
}
