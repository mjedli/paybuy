import { Component } from '@angular/core';
import { CustomerService } from '../service.component';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
})
export class SearchCustomerComponent {

	constructor(public customerService:CustomerService) { }
	
	searchValue:string="";
	
	list:Customer[] = [
	    {id : 1654646546546546464, name : "Google", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	    {id : 2, name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	];
	
	
  	getSearchCustomers() {
		this.customerService.setSearchValue(this.searchValue);
   	 	this.list = this.customerService.getSearchCustomers();
 	}

}
