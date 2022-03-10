import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../service.component';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-addcustomer',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css'],
})
export class AddCustomerComponent {

	constructor(public customerService:CustomerService, public router : Router) { }

	currentCustomer:Customer  =  
	{id : 0, name : '', firstname : '', lastname : '', birthday : '', mobile : '', address : ''};
	
	

  	addCustomer() {
   	 	this.customerService.addCustomer(this.currentCustomer);
   	 	this.router.navigateByUrl("customer/success");
 	}

}
