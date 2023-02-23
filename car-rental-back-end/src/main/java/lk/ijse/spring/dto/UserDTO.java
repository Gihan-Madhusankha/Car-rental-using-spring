package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Gihan Madhusankha
 * 2023-02-23 9:31 PM
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class UserDTO {
    private String userID;
    private String userName;
    private String password;
}
