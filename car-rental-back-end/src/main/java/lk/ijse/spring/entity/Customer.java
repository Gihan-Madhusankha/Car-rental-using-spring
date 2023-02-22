package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
@ToString
public class Customer {
    private String fullName;
    @Id
    private String userName;
    private String password;
    private String address;
    private int contact;
    private String email;
    private int nicNo;
    private int licenseNo;
    private String customerImage;
    private String nicImage;
    private String licenseImage;
}
