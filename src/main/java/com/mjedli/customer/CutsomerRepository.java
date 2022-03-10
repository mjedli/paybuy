package com.mjedli.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Repository;

import com.mjedli.customer.model.Customer;

@Repository
public class CutsomerRepository {

	@Autowired
	private MongoOperations mongoOperations;
	
	public Customer addCustomer(Customer customer) {
		return mongoOperations.insert(customer);
	}

	
	
}
