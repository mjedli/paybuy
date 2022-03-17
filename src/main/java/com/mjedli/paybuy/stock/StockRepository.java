/**
 * 
 */
package com.mjedli.paybuy.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Repository;

import com.mjedli.paybuy.Tools;
import com.mjedli.paybuy.customer.model.Customer;
import com.mjedli.paybuy.stock.model.Product;

/**
 * @author mjedli
 *
 */
@Repository
public class StockRepository {

	@Autowired
	private MongoOperations mongoOperations;

	Tools tools = new Tools();
	
	public Product addProduct(Product product) {
		return mongoOperations.insert(product);
		
	}

}
