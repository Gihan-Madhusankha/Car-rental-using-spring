package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
@ToString
public class Customer {
    @Id
    @Column(nullable=false)
    private String userName;

    @Column(nullable=false)
    private String password;

    @Column(nullable=false)
    private String fullName;

    @Column(nullable=false)
    private String address;

    @Column(nullable=false)
    private int contact;

    @Column(nullable=false)
    private String email;

    @Column(nullable=false)
    private String nicNo;

    @Column(nullable=false)
    private String licenseNo;

    private String customerImage;
    private String nicImage;
    private String licenseImage;
}
