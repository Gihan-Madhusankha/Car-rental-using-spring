package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:53 PM
 **/

public interface AdminRepo extends JpaRepository<Admin, String> {
    @Query(value = "select adminID from admin order by adminID desc limit 1", nativeQuery = true)
    public String generateID();
}
