import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../../provider/service.component';
import { Provider } from '../../provider/model/provider';

@Component({
  selector: 'app-searchaddproduct',
  templateUrl: 'searchadd.component.html',
  styleUrls: ['searchadd.component.css'],
})
export class SearchAddProductComponent implements OnInit {

	constructor(public providerService:ProviderService, public router : Router) { }
	
	searchValue:string="";
	
	list:Provider[] = [
	    //{id : "1654646546546546464", name : "Google", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	    //{id : "2", name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	];
	
	ngOnInit() {
  		this.getSearchCustomers();
  	}
	
  	getSearchCustomers() {
		if(this.searchValue != "") {
			 this.providerService.setSearchValue(this.searchValue);
			 this.list=this.providerService.getSearchCustomersOLD();
		}
 	}

}
