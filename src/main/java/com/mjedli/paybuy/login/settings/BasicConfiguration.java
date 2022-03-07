package com.mjedli.paybuy.login.settings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.mjedli.paybuy.login.UserService;



@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
public class BasicConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	UserService userDetailsService;
	
    public BasicConfiguration() {
        super();
    }
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);
	}

	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/barber/model/insert");
		http.authorizeRequests().antMatchers("/barber/forget/password");
		http.authorizeRequests().antMatchers("/barber/update/password");
		
		http.authorizeRequests().antMatchers("/barber*").hasAuthority("ROLE_USER")
		.antMatchers("/barber/*").hasAuthority("ROLE_USER")
		.antMatchers("/").hasAuthority("ROLE_USER").and().formLogin().loginPage("/loginBarber").loginProcessingUrl("/login")
        .defaultSuccessUrl("/home", true);
		http.logout().logoutSuccessUrl("/loginBarber?logout");
		
		http.csrf();
	}
	
	@Bean
	public static PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}
}
