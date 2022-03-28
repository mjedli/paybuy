/**
 * 
 */
package com.mjedli.paybuy.invoice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mjedli.paybuy.invoice.model.Invoice;
import com.mjedli.paybuy.invoice.model.SearchInvoice;

/**
 * @author mjedli
 *
 */
@Service
public class InviceService {

	@Autowired
	private InvoiceRepository invoiceRepository;

	public Invoice addInvoice(Invoice invoice) {
		return invoiceRepository.addInvoice(invoice);
	}

	public List<Invoice> getInvoicesByDate(SearchInvoice searchInvoice) {
		return invoiceRepository.getInvoicesByDate(searchInvoice);
	}
	
}
