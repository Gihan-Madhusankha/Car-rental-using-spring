package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:52 PM
 **/

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    @Id
    @Column(nullable = false)
    String userID;
    @Column(nullable = false)
    String username;
    @Column(nullable = false)
    String password;
}
