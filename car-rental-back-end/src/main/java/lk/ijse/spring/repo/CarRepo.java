package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:54 PM
 **/

public interface CarRepo extends JpaRepository<Car, String> {
    @Query(value = "select manageCarId from Car order by manageCarId desc limit 1", nativeQuery = true)
    String generateID();

    @Query(value = "select * from car where manageCarType = ?1", nativeQuery = true)
    Car searchCarByName(String name);

    @Query(value = "select DISTINCT manageCarType from car where manageCarBrand = ?1", nativeQuery = true)
    ArrayList<String> getCarTypesByName(String carName);

}
