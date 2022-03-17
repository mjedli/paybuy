/**
 * 
 */
package com.mjedli.paybuy.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mjedli.paybuy.customer.CutsomerRepository;
import com.mjedli.paybuy.stock.model.Product;

/**
 * @author mjedli
 *
 */
@Service
public class StockService {

	@Autowired
	private StockRepository stockRepository;
	
	public Product addProduct(Product product) {
		return stockRepository.addProduct(product);
	}

}
