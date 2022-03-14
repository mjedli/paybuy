import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../service.component';
import { Product } from '../model/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css'],
})
export class AddProductComponent {

	constructor(public stockService:StockService, public router : Router) { }

	product:Product = {} as Product;
	
  	addProduct() {
		this.stockService.addProductOLD(this.product);
 	}

}
