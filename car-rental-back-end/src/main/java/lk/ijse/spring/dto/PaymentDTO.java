package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 3:30 PM
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class PaymentDTO {
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
