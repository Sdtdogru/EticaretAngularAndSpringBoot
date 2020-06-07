package com.fikrimir.fikrimir.security.user_details;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name = "user_authorities")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomGrantedAuthority implements GrantedAuthority {

    @Id
    private Long id;
    private String authCode;


    @Override
    public String getAuthority() {
        return authCode;
    }
}
