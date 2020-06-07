package com.fikrimir.fikrimir.member;

import com.fikrimir.fikrimir.security.user_details.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
    @Autowired
    MemberService memberService;

    @GetMapping("public/member/{username}")
    public CustomUserDetails findByProductId(@PathVariable String username){
        return memberService.findByMemberUserName(username);
    }

}
