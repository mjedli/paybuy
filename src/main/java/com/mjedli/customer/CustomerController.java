package com.mjedli.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.mjedli.customer.model.Customer;
/**
 * @author mjedli
 *
 */

@Controller
public class CustomerController {

	private static final String HREF_BASE = "/paybay";
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping(value = HREF_BASE + "/customer/add")
	private String addCustomer(@RequestBody Customer customer) {
		
		customerService.addCustomer(customer);
		return null;
	
	}
	
}
