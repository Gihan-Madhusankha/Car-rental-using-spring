package lk.ijse.spring.repo;

import lk.ijse.spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:55 PM
 **/

public interface UserRepo extends JpaRepository<User, String> {
}
