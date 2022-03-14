import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../service.component';
import { Product } from '../model/product';

@Component({
  selector: 'app-searchproduct',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
})
export class SearchProductComponent implements OnInit {

	constructor(public stockService:StockService, public router : Router) { }
	
	searchValue:string="";
	
	list:Product[] = [
	    //{id : "1654646546546546464", name : "Google", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	    //{id : "2", name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	];
	
	ngOnInit() {
  		this.getSearchCustomers();
  	}
	
  	getSearchCustomers() {
		if(this.searchValue != "") {
			 this.stockService.setSearchValue(this.searchValue);
			 this.list=this.stockService.getSearchCustomersOLD();
		}
 	}

}
