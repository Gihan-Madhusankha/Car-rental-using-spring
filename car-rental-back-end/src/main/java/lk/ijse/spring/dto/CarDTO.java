package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Gihan Madhusankha
 * 2023-02-27 9:35 PM
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CarDTO {
    private String manageCarId;
    private String manageCarBrand;
    private String manageCarColor;
    private String manageCarType;
    private String manageCarRegistrationNo;
    private String manageCarFuelType;
    private String manageCarTransmissionType;
    private int manageCarNoOfPassengers;
    private double manageCarDailyRatePrice;
    private double manageCarMonthlyRatePrice;
    private double manageCarFreeKMPerDay;
    private double manageCarFreeKMPerMonth;
    private double manageCarTotalDistanceTravelled;
    private double manageCarPriceForExtraKm;
    private String manageCarInteriorView;
    private String manageCarBackView;
    private String manageCarSideView;
    private String manageCarFrontView;
    private String manageCarAvailableOrNot;
    private String manageCarDamageOrNot;
    private String manageCarUnderMaintainOrNot;
}
