import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../service.component';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-detailscustomer',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css'],
})
export class DetailsCustomerComponent implements OnInit {

	constructor(public customerService:CustomerService, private route: ActivatedRoute) { }
	
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

}
