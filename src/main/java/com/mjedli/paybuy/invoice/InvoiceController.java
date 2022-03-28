/**
 * 
 */
package com.mjedli.paybuy.invoice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mjedli.paybuy.SequenceGeneratorService;
import com.mjedli.paybuy.customer.model.Customer;
import com.mjedli.paybuy.invoice.model.Invoice;
import com.mjedli.paybuy.invoice.model.SearchInvoice;

/**
 * @author mjedli
 *
 */
@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
public class InvoiceController {

	private static final String HREF_BASE = "/paybay";
	
	@Autowired
	private InviceService invoiceService;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@PostMapping(value = HREF_BASE + "/invoice/add")
	@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
	private Invoice addCustomer(@RequestBody Invoice invoice) {
		
		invoice.setId(sequenceGeneratorService.generateSequence(Invoice.SEQUENCE_NAME));
		
		return invoiceService.addInvoice(invoice);
	
	}
	
	@PostMapping(value = HREF_BASE + "/invoice/date")
	@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
	private List<Invoice> getInvoicesByDate(@RequestBody SearchInvoice searchInvoice) {
		
		return invoiceService.getInvoicesByDate(searchInvoice);
	
	}
	
	
	@GetMapping(value = HREF_BASE + "/invoice/{id}")
	@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
	private Invoice getInvoiceById(@PathVariable String id) {

		return invoiceService.getInvoiceById(id);
	
	}
	
	
}
