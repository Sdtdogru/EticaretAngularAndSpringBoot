package com.fikrimir.fikrimir.security.user_details;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomUserDetailsRepository extends JpaRepository<CustomUserDetails,Long> {

     @Query("select c from CustomUserDetails as c where c.username = ?1")
     CustomUserDetails findByUsername(String username);
}
