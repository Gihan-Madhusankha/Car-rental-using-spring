package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 3:27 PM
 **/

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Payment {
    @Id
    private String paymentID;
    private LocalDate paymentDate;
    private String rentFee;
    private String driverFee;
    private String damageFee;
    private String harmOrNot;
    private String totalDistance;
    private String extraKM;
    private String fullPayment;
}
