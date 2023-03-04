package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;

/**
 * @author : Gihan Madhusankha
 * 2023-02-26 7:15 PM
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String driverID;
    private String driverName;
    private String driverAddress;
    private int age;
    private int contact;
    private String releaseOrNot;
    private String adminID;
}
