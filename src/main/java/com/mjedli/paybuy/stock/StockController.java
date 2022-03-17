/**
 * 
 */
package com.mjedli.paybuy.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mjedli.paybuy.SequenceGeneratorService;
import com.mjedli.paybuy.stock.model.Product;

/**
 * @author mjedli
 *
 */
@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
public class StockController {

	private static final String HREF_BASE = "/paybay";
	
	@Autowired
	private StockService stockService;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@PostMapping(value = HREF_BASE + "/stock/add")
	@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
	private Product addCustomer(@RequestBody Product product) {
		
		product.setId(sequenceGeneratorService.generateSequence(Product.SEQUENCE_NAME));
		
		return stockService.addProduct(product);
	
	}
}
