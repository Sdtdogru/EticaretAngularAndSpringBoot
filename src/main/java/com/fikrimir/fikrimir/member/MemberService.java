package com.fikrimir.fikrimir.member;

import com.fikrimir.fikrimir.security.user_details.CustomUserDetails;
import com.fikrimir.fikrimir.security.user_details.CustomUserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    CustomUserDetailsRepository customUserDetailsRepository;

    public CustomUserDetails findByMemberUserName(String username){
        return  customUserDetailsRepository.findByUsername(username);

    }

}
