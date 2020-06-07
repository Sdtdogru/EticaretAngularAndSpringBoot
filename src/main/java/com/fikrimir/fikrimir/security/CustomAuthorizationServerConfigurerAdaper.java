package com.fikrimir.fikrimir.security;

import com.fikrimir.fikrimir.security.user_details.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;

@Configuration
@EnableAuthorizationServer
public class CustomAuthorizationServerConfigurerAdaper extends AuthorizationServerConfigurerAdapter {

    private static  final String CLIENT_ID="client";
    private static  final String CLIENT_SECRET="secret";
    private static  final String SCOPE="server";
    private static  final String GRANT_TYPE="password";
    private static  final int ACCESS_TAKEN_VALIDITY_SECONDS=2*60*60;
    private static  final int REFRESH_TAKEN_VALIDITY_SECONDS=2*60*60;

    @Autowired
    @Qualifier("authenticationManagerBean")
    private AuthenticationManager authenticationManager;

    @Autowired
    @Qualifier("passwordEncoder")
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private CustomUserDetailsService customUserDetailsService;


    @Autowired
    private DataSource datasource;
    @Autowired
    private TokenStore tokenStore;




    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpints){
        endpints.tokenStore(tokenStore)
                .authenticationManager(authenticationManager)
                .userDetailsService(customUserDetailsService)
                .allowedTokenEndpointRequestMethods(HttpMethod.GET,HttpMethod.POST);
    }


    @Override
    public void configure(ClientDetailsServiceConfigurer configurer) throws Exception{
        configurer.inMemory()
                .withClient(CLIENT_ID)
                .secret(bCryptPasswordEncoder.encode(CLIENT_SECRET))
                .authorizedGrantTypes(GRANT_TYPE)
                .scopes(SCOPE)
                .accessTokenValiditySeconds(ACCESS_TAKEN_VALIDITY_SECONDS)
                .refreshTokenValiditySeconds(REFRESH_TAKEN_VALIDITY_SECONDS);
    }


    public static class CorsFilter implements Filter {

        @Override
        public void doFilter(ServletRequest request, ServletResponse response, FilterChain filter) throws IOException, ServletException {
            HttpServletRequest reg = (HttpServletRequest) request;
            HttpServletResponse res = (HttpServletResponse) response;

            res.setHeader("Access-Control-Allow-Origin","http://localhost:4200");
            res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, DELETE");
            res.setHeader("Access-Control-Max-Age","300");
            res.setHeader("Access-Control-Allow-Headers","Authorization, Content-Type");
            res.setHeader("Access-Control-Expose-Headers","*");
            res.setHeader("Access-Control-Allow-Credentials","true");

            if(reg.getMethod().equalsIgnoreCase("OPTIONS")){
                res.setStatus(200);
            }else{
                filter.doFilter(reg,res);
            }
        }
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.addTokenEndpointAuthenticationFilter(new CorsFilter());
    }

    @Bean
    public TokenStore tokenStore(){
        return new InMemoryTokenStore();
    }
}
