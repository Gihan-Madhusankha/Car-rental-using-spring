package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * @author : Gihan Madhusankha
 * 2023-02-21 11:52 PM
 **/

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Driver {
    @Id
    @Column(nullable = false)
    private String driverID;
    @Column(nullable = false)
    private String driverName;
    @Column(nullable = false)
    private String driverAddress;
    @Column(nullable = false)
    private int age;
    @Column(nullable = false)
    private int contact;
    private String releaseOrNot;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "admID", referencedColumnName = "adminID",nullable = false)
    private Admin admID;
}
