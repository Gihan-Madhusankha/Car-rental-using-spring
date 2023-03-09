package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ReserveDTO;
import lk.ijse.spring.entity.Reserve;
import lk.ijse.spring.repo.ReserveRepo;
import lk.ijse.spring.service.ReserveService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

/**
 * @author : Gihan Madhusankha
 * 2023-03-09 1:48 AM
 **/

@Service
@Transactional
public class ReserveServiceImpl implements ReserveService {

    @Autowired
    ReserveRepo repo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public String generateReserveID() {
        return repo.generateID();
    }

    @Override
    public void saveReserve(ReserveDTO dto) {
        Reserve entity = modelMapper.map(dto, Reserve.class);
        repo.save(entity);
    }

    @Override
    public ArrayList<ReserveDTO> allReserves() {
        return modelMapper.map(repo.findAll(), new TypeToken<ArrayList<ReserveDTO>>(){}.getType());
    }
}
