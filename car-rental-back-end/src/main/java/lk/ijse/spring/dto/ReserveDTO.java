package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 1:44 AM
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ReserveDTO {
    private String reserveID;
    private String reserveDate;
    private String cusUsername;
    private LocalDate pickDate;
    private LocalTime pickTime;
    private LocalDate returnDate;
    private LocalTime returnTime;
    private String duration;
    private String driverID;
}
