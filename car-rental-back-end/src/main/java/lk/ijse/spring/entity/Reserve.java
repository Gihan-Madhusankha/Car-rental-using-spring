package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 1:22 AM
 **/

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Reserve {
    @Id
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
