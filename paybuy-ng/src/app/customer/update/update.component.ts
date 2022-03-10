import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service.component';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-detailsupdate',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css'],
})
export class UpdateCustomerComponent implements OnInit {

	constructor(public customerService:CustomerService, public router : Router, private route: ActivatedRoute) { }
	
	searchValue:string="";
	
	customer:Customer;
	
	private routeSub: Subscription;
	
	ngOnInit() {
  		this.routeSub = this.route.params.subscribe(params => {
    		this.customerService.setCurrentIdSelected(params['idcustomer']);
  		});
  		
  		this.getCustomerById();
  	}
	
  	getCustomerById() {
		this.customer = this.customerService.getCustomerByCurrentId();
 	}

  	updateCustomer() {
		this.customerService.modifiyCustomer(this.customer);
		this.router.navigateByUrl("customer/success");
 	}

}
