package lk.ijse.spring.advice;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * @author : Gihan Madhusankha
 * 2023-02-22 11:35 PM
 **/

@RestControllerAdvice
@CrossOrigin
public class AppWideExceptionHandler {

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler({RuntimeException.class})
    public void handlerException(RuntimeException e){
        System.out.println(e.getMessage());
    }
}
