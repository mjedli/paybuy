import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../customer/service.component';
import { InvoiceService } from '../service.component';
import { Customer } from '../../customer/model/customer';
import { Line } from '../model/line';
import { Invoice } from '../model/invoice';

@Component({
  selector: 'app-searchinvoice',
  templateUrl: 'searchdate.component.html',
  styleUrls: ['searchdate.component.css'],
})
export class SearchDateInvoiceComponent implements OnInit {

	constructor(public customerService:CustomerService, public router : Router,
				private route: ActivatedRoute, public invoiceService:InvoiceService) { }
	
	currentDateStart:string="";
	currentDateEnd:string="";
	
	customer:Customer = {} as Customer;
	
	searchValue:string="1";
	
	list:Invoice[] = [];
	
	private routeSub: Subscription;
	
	ngOnInit() {
		
		this.routeSub = this.route.params.subscribe(params => {
    		this.customerService.setCurrentIdSelected(params['idcustomer']);
  		});
		
  		this.getCustomerById();
  	}
	
	getCustomerById() {
		this.customer=this.customerService.getCustomerByCurrentIdOLD();
	}
	
  	getSearchCustomers() {
		if(this.searchValue != "") {
			 this.invoiceService.setSearchValue(this.searchValue);
			 this.list=this.invoiceService.getSearchInvoiceOLD();
		}
	}

}
