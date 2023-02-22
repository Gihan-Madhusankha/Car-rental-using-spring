package lk.ijse.spring.config;

import lk.ijse.spring.service.impl.CustomerServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author : Gihan Madhusankha
 * 2023-02-15 6:21 PM
 **/

@Configuration
@Import({JPAConfig.class})
@ComponentScan(basePackageClasses = {CustomerServiceImpl.class})
public class WebRootConfig {

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
    
}
