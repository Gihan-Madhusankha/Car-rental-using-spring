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

    @Query(value = "select DISTINCT * from car where manageCarType = ?1 Group by manageCarType", nativeQuery = true)
    Car searchCarByName(String carType);

    @Query(value = "select DISTINCT manageCarType from Car where manageCarBrand = ?1", nativeQuery = true)
    ArrayList<String> getCarTypesByName(String carName);

    @Query(value = "SELECT COUNT(manageCarType) FROM Car WHERE manageCarType = ?1 and manageCarAvailableOrNot = 'Available'", nativeQuery = true)
    int getAvailableCars(String c);

//    @Query(value = "Update car SET manageCarAvailableOrNot = 'Not Available' where manageCarType = ?1 and manageCarAvailableOrNot = 'Available' limit 1", nativeQuery = true)
//    void updateAvailableCars(String type);

    @Query(value = "select * from car where manageCarType = ?1 and manageCarAvailableOrNot = 'Available' limit 1", nativeQuery = true)
    Car getLastAvailableCarDetails(String lastAvailableCarType);
}
