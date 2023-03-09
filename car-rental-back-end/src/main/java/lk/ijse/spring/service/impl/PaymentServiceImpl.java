package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.PaymentDTO;
import lk.ijse.spring.entity.Payment;
import lk.ijse.spring.repo.PaymentRepo;
import lk.ijse.spring.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 4:09 PM
 **/

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    PaymentRepo repo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public void savePayment(PaymentDTO dto) {
        Payment entity = modelMapper.map(dto, Payment.class);
        repo.save(entity);
    }

    @Override
    public String generateID() {
        return repo.generateID();
    }

    @Override
    public ArrayList<PaymentDTO> allPayments() {
        return modelMapper.map(repo.findAll(), new TypeToken<ArrayList<PaymentDTO>>(){}.getType());
    }
}
