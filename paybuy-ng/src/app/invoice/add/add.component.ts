import { Component, OnInit  } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../../stock/service.component';
import { CustomerService } from '../../customer/service.component';
import { InvoiceService } from '../service.component';
import { Product } from '../../stock/model/product';
import { Customer } from '../../customer/model/customer';
import { Line } from '../model/line';
import { Invoice } from '../model/invoice';

@Component({
  selector: 'app-addinvoice',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css'],
})
export class AddInvoiceComponent implements OnInit {

	constructor(public stockService:StockService, public cutomerService:CustomerService,
				public router : Router, private route: ActivatedRoute,
				public invoiceService:InvoiceService) { }
	
	searchValue:string="";
	
	currentDate = new Date();;
	
	somme:number=0.00;
	sommeTVA:number=0.00;
	TVA:number=0.00;
	paid:number=0.00;
	credit:number=0.00;
	
	customer:Customer = {} as Customer;
	
	invoice:Invoice = {} as Invoice;
	
	lineTemp:Line = {} as Line;
	
	list:Product[] = [
	    //{id : "1654646546546546464", name : "Google", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	    //{id : "2", name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
	];
	
	listline:Line[] = [];
	
	listSearchLine:Line[] = [];
	
	private routeSub: Subscription;
	
	ngOnInit() {
		
		this.routeSub = this.route.params.subscribe(params => {
    		this.cutomerService.setCurrentIdSelected(params['idcustomer']);
  		});
		
		this.getCustomerById();
  		this.getSearchCustomers();
  	}
  	
  	saveInvoice() {
		this.invoice = {
		  id:"",
		  idCustomer:this.customer.id,
		  date:this.currentDate,
		  listline:this.listline,
		  total:this.somme,
		  totalTva:this.sommeTVA,
		  credit:this.customer.credit,
		  newCredit:this.credit,
		  paid:this.paid
		}
		
		this.invoiceService.addInvoice(this.invoice);
		this.router.navigateByUrl("invoice/success");
	}
	
	onPrint(divName:string) {
		 /*
	     const printContents = document.getElementById(divName)!.innerHTML;
	     const originalContents = document.body.innerHTML;
	     document.body.innerHTML = printContents;
	     window.print();
	     
	     document.body.innerHTML = originalContents;
	     return false;
	     */
	        var mywindow = window.open('', 'PRINT');
        
            mywindow!.document.write('<html lang="fr"><head><title></title>');
            mywindow!.document.write('<style>');
            
            mywindow!.document.write('@media print{@page {size: A4; margin-top: 0;margin-bottom: 0;}body  {padding-top: 72px;padding-bottom: 72px ;}}'); 

            mywindow!.document.write('.table .thead-light th {color: #495057;background-color: #e9ecef;border-color: #dee2e6;}');
            mywindow!.document.write('.table thead th {vertical-align: bottom;border-bottom: 2px solid #dee2e6;border-bottom-color: rgb(222, 226, 230);}');
            mywindow!.document.write('.table td, .table th {padding: .75rem;vertical-align: top;border-top: 1px solid #dee2e6;border-top-color: rgb(222, 226, 230);');
            
            mywindow!.document.write('th {text-align: inherit;} .table {color: #212529;} table {border-collapse: collapse;}');
            mywindow!.document.write(".material-icons {font-family: 'Material Icons';font-weight: normal;font-style: normal;font-size: 24px;line-height: 1;letter-spacing: normal;text-transform: none;");
  			mywindow!.document.write("display: inline-block;white-space: nowrap;word-wrap: normal;direction: ltr;-moz-font-feature-settings: 'liga';-moz-osx-font-smoothing: grayscale;}");
			mywindow!.document.write('</style>');
			//mywindow!.document.write('<link rel="stylesheet" href="content/bootstrap.min.css"/>');
			//mywindow!.document.write('<link href="content/materialicons.css" type="text/css" rel="stylesheet">');
            mywindow!.document.write('</head><body >');
            mywindow!.document.write(document.getElementById(divName)!.innerHTML);
            mywindow!.document.write('</body></html>');
        
            mywindow!.document.close(); // necessary for IE >= 10
            mywindow!.focus(); // necessary for IE >= 10*/

            mywindow!.print();
            mywindow!.close();
            return false;
	    
	}
	
	resetSearchLine() {
		this.listSearchLine = [];
	}
	
	saveLine(id:string) {
		this.lineTemp = this.listSearchLine.find(x => x.id == id)!;
		this.lineTemp.price = Number(this.lineTemp.amount)*Number(this.lineTemp.sellPrice);
		this.listline.push(this.lineTemp);
		this.somme=this.somme+this.lineTemp.price;
		this.sommeTVA=this.sommeTVA+this.lineTemp.price+((this.lineTemp.price*Number(this.lineTemp.TVA))/100);
		this.listSearchLine = [];
	}
	
	calCredit() {
		if(this.paid==this.sommeTVA) {
			this.credit=this.customer.credit;
		} else {
			if(this.paid<this.sommeTVA) {
				this.credit=this.sommeTVA-this.paid+this.customer.credit;
			} else if(this.paid>this.sommeTVA) {
				this.credit=this.customer.credit-(this.paid-this.sommeTVA);
			} 
		}

		
	}
	
	removeLine(id:string) {
		
		this.lineTemp = this.listline.find(x => x.id == id)!;
		this.somme=this.somme-this.lineTemp.price;
		this.sommeTVA=this.sommeTVA-this.lineTemp.price-((this.lineTemp.price*Number(this.lineTemp.TVA))/100);
		
		const index = this.listline.findIndex((e) => e.id === id);

	    if (index !== -1) {
	        this.listline.splice(index, 1);
	    }
	}
	
	getCustomerById() {
		this.customer=this.cutomerService.getCustomerByCurrentIdOLD();
	}
	
  	getSearchCustomers() {
		if(this.searchValue != "") {
			 this.stockService.setSearchValue(this.searchValue);
			 this.list=this.stockService.getSearchCustomersOLD();
			 
			for (var i = 0; i < this.list.length; i++) {

				this.lineTemp = { id:this.list[i].id,
								  idProvider:this.list[i].idProvider,
								  name:this.list[i].name,
								  amount:"",
								  sellPrice:this.list[i].sellPrice,
								  TVA:this.list[i].tva,
								  price:0,	
								};
			  	this.listSearchLine.push(this.lineTemp);
			}
		}
 	}

}
