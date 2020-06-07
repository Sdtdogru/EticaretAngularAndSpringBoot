package com.fikrimir.fikrimir.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;

@Configuration
@EnableResourceServer
public class CustomResourceServerConfigurerAdapter extends ResourceServerConfigurerAdapter {
    @Override
    public void configure(HttpSecurity http) throws  Exception{
       http.addFilterBefore(new CustomAuthorizationServerConfigurerAdaper.CorsFilter(), ChannelProcessingFilter.class)
               .requestMatchers().antMatchers("/**").and()
                .authorizeRequests().antMatchers("/registration","/public/**").permitAll().and()
                .authorizeRequests().antMatchers("/deneme/**","/private/**").authenticated();

        http.headers().frameOptions().disable();

    }
}
