package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;

/**
 * @author : Gihan Madhusankha
 * 2023-02-26 1:09 PM
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class AdminDTO {
    private String adminID;
    private String userName;
    private String password;
    private int contact;
}
