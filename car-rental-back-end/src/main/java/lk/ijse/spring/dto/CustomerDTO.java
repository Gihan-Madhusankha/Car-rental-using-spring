package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Gihan Madhusankha
 * 2023-02-22 2:03 PM
 **/


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String fullName;
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
