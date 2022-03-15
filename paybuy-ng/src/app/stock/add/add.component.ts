import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../service.component';
import { ProviderService } from '../../provider/service.component';
import { Product } from '../model/product';
import { Provider } from '../../provider/model/provider';

@Component({
  selector: 'app-addproduct',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css'],
})
export class AddProductComponent implements OnInit {

	constructor(public stockService:StockService, public providerService:ProviderService,
				public router : Router,  private route: ActivatedRoute,) { }

	product:Product = {} as Product;
	
	provider:Provider = {} as Provider
	
	private routeSub: Subscription;
	
	ngOnInit() {
		
		this.routeSub = this.route.params.subscribe(params => {
    		this.stockService.setCurrentIdSelected(params['idproduct']);
    		this.providerService.setCurrentIdSelected(params['idprovider']);
    		this.product.idProvider=params['idprovider'];
  		});
		
  		this.getProviderById();
  	}
	
	getProviderById() {
		this.provider=this.providerService.getCustomerByCurrentIdOLD();
	}
	
  	addProduct() {
		this.stockService.addProductOLD(this.product);
		this.router.navigateByUrl("stock/product/success");
 	}

}
