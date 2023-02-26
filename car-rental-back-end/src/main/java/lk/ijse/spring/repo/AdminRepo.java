package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:53 PM
 **/

public interface AdminRepo extends JpaRepository<Admin, String> {
}
