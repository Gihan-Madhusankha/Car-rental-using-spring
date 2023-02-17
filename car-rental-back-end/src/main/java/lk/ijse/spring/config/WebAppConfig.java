package lk.ijse.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author : Gihan Madhusankha
 * 2023-02-15 6:21 PM
 **/

@Configuration
@ComponentScan(basePackages = "lk.ijse.spring")
@EnableWebMvc
public class WebAppConfig {

    public WebAppConfig() {
        System.out.println("WebAppConfig");
    }
}
