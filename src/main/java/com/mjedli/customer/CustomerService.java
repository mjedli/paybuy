/**
 * 
 */
package com.mjedli.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mjedli.customer.model.Customer;

/**
 * @author mjedli
 *
 */

@Service
public class CustomerService {

	@Autowired
	private CutsomerRepository cutsomerRepository;
	
	public Customer addCustomer(Customer customer) {
		return cutsomerRepository.addCustomer(customer);
	}
	
}
