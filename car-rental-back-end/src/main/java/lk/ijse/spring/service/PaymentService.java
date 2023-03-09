package lk.ijse.spring.service;

import lk.ijse.spring.dto.PaymentDTO;

import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 4:09 PM
 **/

public interface PaymentService {
    public void savePayment(PaymentDTO dto);
    public String generateID();
    public ArrayList<PaymentDTO> allPayments();
}
