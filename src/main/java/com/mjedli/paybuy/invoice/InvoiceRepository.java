/**
 * 
 */
package com.mjedli.paybuy.invoice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.mjedli.paybuy.Tools;
import com.mjedli.paybuy.customer.model.Customer;
import com.mjedli.paybuy.invoice.model.Invoice;
import com.mjedli.paybuy.invoice.model.SearchInvoice;

/**
 * @author mjedli
 *
 */
@Repository
public class InvoiceRepository {
	
	@Autowired
	private MongoOperations mongoOperations;

	Tools tools = new Tools();

	public Invoice addInvoice(Invoice invoice) {
		return mongoOperations.insert(invoice);
	}

	public List<Invoice> getInvoicesByDate(SearchInvoice searchInvoice) {
		Criteria criteria = new Criteria();
		criteria.andOperator(Criteria.where("idCustomer").is(searchInvoice.getIdCustomer()),
				Criteria.where("date").gte(searchInvoice.getStartDate()).lt(searchInvoice.getEndDate()));
		Query query = new Query(criteria);
		return mongoOperations.find(query, Invoice.class);
	}

	public Invoice getInvoiceById(String id) {
		Query searchQuery = new Query(Criteria.where("id").is(Long.valueOf(id)));
		return mongoOperations.findOne(searchQuery, Invoice.class);
	}
	
}
