/**
 * 
 */
package com.mjedli.paybuy.login.settings;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author mjedli
 *
 */

@Configuration
public class AppConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/loginBarber").setViewName("login/login");
        registry.addViewController("/registrationbarber").setViewName("login/registration");
        registry.addViewController("/forgetbarber").setViewName("login/forget");
        
        registry.addViewController("/loginCustomer").setViewName("customer/login");
        registry.addViewController("/registrationcustomer").setViewName("customer/registration");
        registry.addViewController("/forgetcustomer").setViewName("customer/forget");

    }
        
}