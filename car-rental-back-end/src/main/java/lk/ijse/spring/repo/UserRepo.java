package lk.ijse.spring.repo;

import lk.ijse.spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:55 PM
 **/

public interface UserRepo extends JpaRepository<User, String> {
    @Query(value = "select userID from user order by userID desc", nativeQuery = true)
    ArrayList<String> lastUserID();
}
