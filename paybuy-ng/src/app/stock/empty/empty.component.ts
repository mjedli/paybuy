import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../service.component';
import { Product } from '../model/product';

@Component({
  selector: 'app-emptyproduct',
  templateUrl: 'empty.component.html',
  styleUrls: ['empty.component.css'],
})
export class EmptyProductComponent implements OnInit {

	constructor(public stockService:StockService, public router : Router) { }
	
	searchValue:string="";
	
	list:Product[] = [
		{id : "1", idProvider:"200", name : "Google Play", amount : "80", buyingPrice : "8.50", sellPrice : "9.50", TVA : "5", profit : "1500"},
	    //{id : "1654646546546546464", name : "Google", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	    //{id : "2", name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	];
	
	ngOnInit() {
  		this.getSearchCustomers();
  	}
	
  	getSearchCustomers() {
		this.list = this.stockService.getSearchProductOLD();
 	}

}
