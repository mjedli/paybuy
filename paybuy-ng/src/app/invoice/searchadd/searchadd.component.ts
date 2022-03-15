import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../customer/service.component';
import { Customer } from '../../customer/model/customer';

@Component({
  selector: 'app-searchaddinvoice',
  templateUrl: 'searchadd.component.html',
  styleUrls: ['searchadd.component.css'],
})
export class SearchAddInvoiceComponent implements OnInit {

	constructor(public customerService:CustomerService, public router : Router) { }
	
	searchValue:string="";
	
	list:Customer[] = [
	    //{id : "1654646546546546464", name : "Google", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	    //{id : "2", name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	];
	
	ngOnInit() {
  		this.getSearchCustomers();
  	}
	
  	getSearchCustomers() {
		if(this.searchValue != "") {
			 this.customerService.setSearchValue(this.searchValue);
			 this.list=this.customerService.getSearchCustomersOLD();
		}
 	}

}
